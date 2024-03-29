## typescript 类
### 类的声明

```
1、使用关键字 class
2、类名首字母大写
3、类一般包含3个成员：属性，构造函数，方法
4、在类的内如引用类成员使用this，表示访问的是类的成员
5、使用关键字 new 构造类的一个实例，它会调用之前定义的构造函数，创建一个指定类型的新对象，并执行构造函数初始化它。

```
### 类的继承

```
1、使用关键字 extends 
2、类从基类中继承了属性和方法
3、派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
4、TypeScript强制执行的一条重要规则：在构造函数里访问 this的属性之前，我们 一定要调用 super()。

```

### 公共，私有与受保护的修饰符

```
1、默认为public
2、私有修饰符private，当成员被标记成 private时，它就不能在声明它的类的外部访问
3、受保护修饰符protected， protected成员在派生类中仍然可以访问，在类的外部不能访问
4、构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。

```

### readonly修饰符

```
1、readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```

### 参数属性

```
1、参数属性可以方便地让我们在一个地方定义并初始化一个成员，一般用于构造函数
2、参数过多时，易读性变差

```

### 存取器

```
1、TypeScript支持通过getters/setters来截取对对象成员的访问
2、使用关键字 get 和 set
3、使用存储器注意点：
（1）存取器要求你将编译器设置为输出ECMAScript 5或更高。
（2）只带有 get不带有 set的存取器自动被推断为 readonly。

```

### 静态属性

```
1、使用关键字 static
2、类的静态成员，这些属性存在于类本身上面而不是类的实例上。
3、使用[类名.]访问静态属性

```

### 抽象类

```
1、使用关键字 abstract， 用于定义抽象类和在抽象类内部定义抽象方法。
2、抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
3、抽象类可以包含成员的实现细节。
4、抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
5、抽象方法必须包含 abstract关键字并且可以包含访问修饰符 public abstract printMeeting(): void

```

### 高级技巧

```
1、类的构造函数：在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是【类的实例的类型】。
2、类可以当做接口使用，类定义会创建两个东西：类的实例类型和一个构造函数。 
   因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

```