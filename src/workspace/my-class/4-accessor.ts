/**
 * 存取器（get，set）
 * typeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
 */

class Employee2 {
    fullName: string;
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}

/**
 * 
 * 把对 fullName的直接访问改成了可以检查密码的 set方法。 我们也加了一个 get方法
 */

let passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}