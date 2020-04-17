import { Expose, plainToClass } from "class-transformer";

// Exposeはクラス自体に設定できないから1つづつやらないといけないみたい
// https://github.com/typestack/class-transformer#enforcing-type-safe-instance
class User {
  @Expose() id: number;
  @Expose() firstName: string;
  @Expose() lastName: string;
  @Expose() age: number;
}

const userJson = [
  {
    id: 1,
    firstName: "Johny",
    lastName: "Cage",
    age: 27,
    create_date: "2010"
  },
  {
    id: 2,
    firstName: "Ismoil",
    lastName: "Somoni",
    age: 50
  },
  {
    id: 3,
    firstName: "Luke",
    lastName: "Dacascos",
    age: 12
  }
];

let users = plainToClass(User, userJson, { excludeExtraneousValues: true });

console.log(users);
