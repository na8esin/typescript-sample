import { strict as assert } from 'assert';

class DTOHasAnyType {
    // これを追加すればエラーは起きないが、
    // いろいろな事情で追加できないorしたくないこともある
    [key: string]: any
    name?: string;
    title?: string;
}

class DTO {
    name?: string;
    title?: string;
}

function mergeDtoWithFirestoreRecord(dto: DTOHasAnyType, firestoreObject: any) {
    Object.keys(firestoreObject).map((key: string) => {
        // DTOクラスに何も対策しないと下記のエラーになる
        // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'DTO'.
        // No index signature with a parameter of type 'string' was found on type 'DTO'
        // なので対策したDTOHasAnyTypeを使う
        if (dto[key] === undefined) {
            dto[key] = firestoreObject[key];
        }
    });
}

// リフレクションで解決してみる
function reflectiton(dto: DTO, firestoreObject: any) {
    Object.keys(firestoreObject).map((key: string) => {
        const name = Reflect.get(dto, key);
        if (name === undefined) {
            Reflect.set(dto, key, firestoreObject[key]);
        }
    });
}

const firestoreObject = { name: 'update' };

const dto1 = {};
mergeDtoWithFirestoreRecord(dto1, firestoreObject);
assert.deepEqual(dto1, { name: 'update' });

const dto2 = {};
reflectiton(dto2, firestoreObject);
assert.deepEqual(dto2, { name: 'update' });

// 同じプロジェクトで変数などが被らないおまじない
export { };