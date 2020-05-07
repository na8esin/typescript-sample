class Dto {
  flg: number = 1;
}

function create<T>(c: {new(): T; }): T {
    return new c();
}

// これだとだめみたい
function create2<T>(c: T): T {
    return new c();
}


const dto = create<Dto>(Dto);
console.log(dto.flg);

//const dto2 = create2<Dto>(Dto);
