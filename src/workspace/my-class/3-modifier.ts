/**
 * 修饰符：公共-public,私有-private, 受保护-protected
 * 默认为public
 */

 /**
  * 属性，构造器，方法
  */
class Animal3 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/**
 * private 修饰符
 * 当成员被标记成 private时，它就不能在声明它的类的外部访问
 */
class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal4("Cat").name; // 错误: 'name' 是私有的.

/**
 * 当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 
 * 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 
 * 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
 */

class Animal5 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal5 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal5("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.

/**
 * protected修饰符
 * 不同点：protected成员在派生类中仍然可以访问
 */

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
    // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
    // protected constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
let mary = new Person('mary');
console.log(mary.name)

// 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。

/**
 * readonly修饰符
 * 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 */

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

/**
 * 参数属性
 * 参数属性可以方便地让我们在一个地方定义并初始化一个成员
 * 不建议使用，参数过多时不够易读性，
 */

class Octopus1 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

class Animal6 {
    constructor(name: string) { }
}