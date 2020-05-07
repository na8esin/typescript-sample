import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
    
    console.log('in required. propertyKey: ');
    console.log(propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    
    console.log('in validate');
    console.log(target); // Greeter {}
    console.log(propertyName); // greet
    
    // propertyNameまで指定しないと何も出力されない
    console.log(Reflect.getMetadataKeys(target, propertyName));
    
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
                
                console.log(arguments[parameterIndex]);
                
                // パラメータに追加で値を入れる
                arguments[parameterIndex] += " Hack now!!!"
            }
        }

        return method.apply(this, arguments);
    }
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string, id?: number) {
        return "Hello " + name + ", " + this.greeting;
    }
    
    waveOfTheHand(@required name: string) {
      console.log('waveOfTheHand');
    }
}

console.log('in main section.');
console.log(new Greeter("OK").greet("john", 1));
// @validateが無くても@requiredは実行される
new Greeter("OK").waveOfTheHand("john");

// "Missing required argument."
//console.log(new Greeter("OK").greet(undefined));