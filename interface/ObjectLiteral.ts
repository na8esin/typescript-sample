export interface ObjectLiteral {
    [key: string]: any;
}

class GenericsRepository<Entity extends ObjectLiteral> {
  create(entity: Entity) {
    entity.id;
    // 参照するだけならいいけど代入するのはダメ
    entity.showAt = 0;
  }
}

export interface MyObjectLiteral {
    [key: string]: any;
    // これを加えればOK
    showAt: number;
}