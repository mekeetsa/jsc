// ja.estest

writeln ("// " + document.URL);
writeln ("// " + Date());
writeln ("// Test the Java Access extension - FESI specific");
writeln();



@test string.1
S = java.lang.String
str = new S("aaa");
str=="aaa"

@test class.1
TestJavaAccessClass = Packages.FESI.Tests.TestJavaAccess;
TestJavaAccessClass.staticIntField == 1;

@test class.2
TestJavaAccessClass.staticIntField = 2;
TestJavaAccessClass.staticIntField == 2;

@test class.3
TestJavaAccessClass.getStaticIntField()==2;

@test class.4
TestJavaAccessClass.staticIntField = 1;
testJavaAccess = new TestJavaAccessClass();
testJavaAccess.intField == 100;

@test class.5
testJavaAccess.intField = 200;
testJavaAccess.getIntField() == 200;

@test class.6
testJavaAccess.getPrivateIntField()==101

@test class.7
// Access via the getter function
testJavaAccess.privateIntField == 101;

@test class.byte.1
"byte widening"==testJavaAccess.checkWidening(1)

@test class.short.1
"short widening"==testJavaAccess.checkWidening(400);

@test class.int.1
"int widening"==testJavaAccess.checkWidening(90000);

@test class.double.1
"double widening"==testJavaAccess.checkWidening(1.2)

@test class.double.2
"double widening"==testJavaAccess.checkWidening(139434845834903324234);

@test class.float.1
"float widening"==testJavaAccess.checkWidening(new java.lang.Float(1.2))

@test class.with.1
with (testJavaAccess) {
   intField == 200;
}

@test class.with.2
with (testJavaAccess) {
   intField = 100;
}
testJavaAccess.intField == 100;

@test class.with.3
with (TestJavaAccessClass) {
    getStaticIntField()==1;
}

@test class.with.4 
with (testJavaAccess) {
    "short widening"==checkWidening(400);
}

@test class.with.5
with (testJavaAccess) {gl = 123;}
gl==123;

@test class.with.6
with (testJavaAccess) {
  privateIntField == 101;
}

@test array.1
ar = testJavaAccess.getArray()
ar[1]==2 && ar.length==3;

@test array.2
bi = new java.math.BigInteger(ar);
bi==66051

@test array.3
// Test that native array can be given back as array
testJavaAccess.meanArray(ar)==2;

@test array.4
testJavaAccess.meanArray(new Array(2,6,10))==6;

@test interface.1
testJavaAccess.testInterface(testJavaAccess);

@test js.1
o = new Object();
o.a = 1;
o.b = 2;
ok=testJavaAccess.testJS(o)
ok && o.r==4;


@test js.2
o.separator=":";
o.jsf(4)==":4:";


@test beans.1
jBeans = java.beans.Beans;
Introspector = java.beans.Introspector;
classLoader = java.lang.System.getClassLoader();
bean = jBeans.instantiate(classLoader,"java.awt.Button"); 
beancl = bean.getClass()
info = Introspector.getBeanInfo(beancl); 
bd = info.getBeanDescriptor()
// String could be slightly different depending on the implementation
bd.getBeanClass().toString()=="class java.awt.Button"; 

@test beans.2
// Access a potential bean as object
jbo = new Packages.FESI.Tests.TestJavaBean();
jbo.hidden==12

@test beans.3
jbo.both==5;

@test beans.4
jbo.visible==3

@test beans.5
jbo.hidden=1
jbo.visible=2
jbo.both=4
jbo.getHidden()==1 && jbo.getBoth()==-4 && jbo.visible==2;

@test beans.6
// Access a potential bean as bean
jbb = new Beans.FESI.Tests.TestJavaBean();
jbb.both==-5;

@test beans.7
// field visible is not visible as a property !
jbb.hidden==12

@test beans.8
jbb.hidden=1
jbb.both=4
jbb.getHidden()==1 && jbb.getBoth()==4 

@test beans.with.1
with (jbb) {
   hidden==1 && both ==4;
}

@test beans.with.2
with (jbb) {
   hidden=2; 
}
jbb.hidden==2;

@test beans.with.3
with (jbb) {
    getBoth()==4;
}

@test beans.with.4
with (jbb) {gl=321;}
gl=321;


@test beansarray.1
ba=new Beans.FESI.Tests.TestDescrBean()
ba.toString()=="TestDescrBean: intValue=9, intArray=[1,2,3,4,5], intIndexed=[11,12,13,14,15]";

@test beansarray.2
ba.intArray[3]=99;
ba.toString()=="TestDescrBean: intValue=9, intArray=[1,2,3,99,5], intIndexed=[11,12,13,14,15]";


@test beansarray.3
a = new Array(31,32);
ba.intArray = a
ba.toString()=="TestDescrBean: intValue=9, intArray=[31,32], intIndexed=[11,12,13,14,15]";


@test event.1
// Could be another event...
e = info.getEventSetDescriptors();
e[0].getDisplayName()=='mouse';

@test object.1
s = testJavaAccess.makeStuff();
s.toString()=="local";

@test object.2
s = testJavaAccess.makeSub();
s.whichOne()=="sub";

@test object.3
testJavaAccess.makeStuffElement(o);
o.sls.getClass()=="class FESI.Tests.SomeLocalStuff";

@test beanwrap.1
testJavaAccess.makeObj(o)
testJavaAccess.makeBean(o)
o.asBean.both == - o.asObj.both;

@test forin.1
tr = true;
for (i in testJavaAccess.images) {
   tr &= (javaTypeOf(i)=="FESI.Tests.TestJavaAccess$ImageClass");
}
tr;

@test access.1
// Some bizare access
dic=new java.util.Hashtable
dic.put("cat","miaow")
dic.put("dog","woof")
keys=dic.keys()
b=keys.hasMoreElements()
b;

@test access.2
sid = testJavaAccess.getSubInterfaceData();
sid.getSubData() == 84;

@test access.3
sid.getData() == 42;

@test access.4
sid.getSubData(1) == 43;
