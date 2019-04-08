const sub=require("./difference");
test("Expects sub(5,1) to be 4",()=>{
    expect(sub(5,1)).toBe(4);
});
test("Expects sub(-5,1) to be 4",()=>{
    expect(sub(-5,1)).toBe(-6);
});
test("Expects sub(-5,-1) to be 4",()=>{
    expect(sub(-5,-1)).toBe(-4);
});
test("Expect sub(0.1,0.2)",()=>{
    expect(sub(0.1,0.2)).toBe(-0.1);
});
test("Expect sub()",()=>{
    expect(sub()).toBe(NaN);
});
test("Expect sub(true,false)",()=>{
    expect(sub(true,false)).toBe(NaN);
});
test("Expect sub(true,true)",()=>{
    expect(sub(true,true)).toBe(NaN);
});
test("Expect sub(false,false)",()=>{
    expect(sub(false,false)).toBe(NaN);
});
test("Expect sub(false,true)",()=>{
    expect(sub(false,true)).toBe(NaN);
});
test("Expect sub(null,null)",()=>{
    expect(sub(null,null)).toBe(NaN);
});
test("Expect sub(undefined,undefined)",()=>{
    expect(sub(undefined,undefined)).toBe(NaN);
});
test("Expect sub(Infinity,Infinity)",()=>{
    expect(sub(Infinity,Infinity)).toBe(NaN);
});
test("Expect sub(-Infinity,-Infinity)",()=>{
    expect(sub(-Infinity,-Infinity)).toBe(NaN);
});
