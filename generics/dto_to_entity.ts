// アプリケーションレイヤから
// サービスレイヤにデータを渡すためのクラス
export class Dto {
    flg?: number = 1;
    name?: string;
}

export class Entity {
    flg?: number = 1;
    name?: string;
    updated?: Date;

    static dtoToEntity(arg: Dto): Entity {
        // new this()はstaticだから使える
        return Object.assign(new this(), arg);
    }
}

// 一般化したやつ
// ダックタイピング的に使う
// 型がなんか不安定な気もするけど、そんなことはないはず
function dtoToEntity<T>(c: { new(): T }, arg: T): T {
    return Object.assign(new c(), arg);
}

const dto = new Dto();
dto.name = 'bob';
console.log(dtoToEntity(Entity, dto));