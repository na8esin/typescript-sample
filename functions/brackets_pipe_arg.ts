class Type<T> {
  
}

class PipeTransform {
  
}

function Args(
  pipes: (Type<PipeTransform> | PipeTransform)
): ParameterDecorator {
  console.log(pipes);
  return  (target: Object, propertyKey: string | symbol, parameterIndex: number): number => { return 1;};
}

Args(new PipeTransform());

Args(new Type<PipeTransform>());