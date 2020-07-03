interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
    // 下の書き方でも一緒
    //[key: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return { color:'some color', area:1 };
}

let mySquare = createSquare({ colour: "red", width: 100 });