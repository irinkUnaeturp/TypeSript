declare const isFetching: boolean;
declare const isLoading: boolean;
declare const int: number;
declare const float: number;
declare const num: number;
declare const message: string;
declare const numberArray: number[];
declare const numberArray2: Array<number>;
declare const words: string[];
declare const contact: [string, number];
declare let variable: any;
declare function sayMyName(name: string): void;
declare function throwError(message: string): never;
declare function infinite(): never;
type Login = string;
declare const login: Login;
type ID = string | number;
declare const id1: ID;
declare const id2: ID;
type SomeType = string | null | undefined;
interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    };
}
declare const rect1: Rect;
declare const rect2: Rect;
declare const rect3: Rect;
declare const rect4: Rect;
interface RectWithArea extends Rect {
    getArea: () => number;
}
declare const rect5: RectWithArea;
interface IClock {
    time: Date;
    setTime(date: Date): void;
}
declare class Clock implements IClock {
    time: Date;
    setTime(date: Date): void;
}
interface Styles {
    [key: string]: string;
}
declare const css: Styles;
declare enum Membership {
    Simple = 0,
    Standard = 1,
    Premium = 2
}
declare const membership = Membership.Standard;
declare const membershipReverse: string;
declare enum SocialMedia {
    VK = "VK",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM"
}
declare const social = SocialMedia.INSTAGRAM;
declare function add(a: number, b: number): number;
declare function toUpperCase(str: string): string;
interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}
interface MyPositionWithDefault extends MyPosition {
    default: string;
}
declare function position(): MyPosition;
declare function position(a: number): MyPositionWithDefault;
declare function position(a: number, b: number): MyPosition;
declare function strip(x: string | number): string;
declare class MyResponse {
    header: string;
    result: string;
}
declare class MyError {
    header: string;
    message: string;
}
declare function handle(res: MyResponse | MyError): {
    info: string;
};
type AlertType = 'success' | 'danger' | 'warning';
declare function setAlertType(type: AlertType): void;
declare const arrayOfNumbers: Array<number>;
declare const arrayOfStrings: Array<string>;
declare function reverse<T>(array: T[]): T[];
interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person;
declare let key: PersonKeys;
type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;
declare let u1: UserKeysNoMeta1;
