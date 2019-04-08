const multiply=require("./multiply");
test("expects multiply(2,3) to return 6",()=>{
    expect(multiply(2,3)).toBe(6);
});
test("expects multiply() to return argument cannot be empty",()=>{
    expect(multiply()).toBe("argument cannot be empty");
});
test("expects multiply(0,1) to return 0",()=>{
    expect(multiply(0,1)).toBe(0);
});
test("expects multiply(0.3,0.2) to return 0.06",()=>{
    expect(multiply(0.3,0.2)).toBe(0.06);
});
test("expects multiply(null,null) to return NaN",()=>{
    expect(multiply(null,null)).toBe(NaN);
});
test("expects multiply(true,false) to return NaN",()=>{
    expect(multiply(true,false)).toBe(NaN);
});
test("expects multiply(undefined) to return NaN",()=>{
    expect(multiply(undefined)).toBe(NaN);
});