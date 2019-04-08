const addInfinite=require("./add-infinite");
test("addInfinite(1,2,3)",()=>{
    expect(addInfinite(1,2,3)).toBe(6);
});
test("expects addInfinite() return argument cannot be empty",()=>{
    expect(addInfinite()).toBe("argument cannot be empty");
 });
 test("expects addInfinite(1,null) to return NaN",()=>{
    expect(addInfinite(1,null)).toBe(NaN);
 });
 test("expects addInfinite(null,1) to return NaN",()=>{
    expect(addInfinite(null,1)).toBe(NaN);
 });
 test("expects addInfinite(null,null) to return NaN",()=>{
    expect(addInfinite(null,null)).toBe(NaN);
 });
 test("expects addInfinite(true,true) to return NaN",()=>{
    expect(addInfinite(true,true)).toBe(NaN);
 });
 test("expects addInfinite(true,false) to return NaN",()=>{
    expect(addInfinite(true,false)).toBe(NaN);
 });
 test("expects addInfinite(false,false) to return NaN",()=>{
    expect(addInfinite(false,false)).toBe(NaN);
 });
 test("expects addInfinite(\"3\",\"3\") to return NaN",()=>{
    expect(addInfinite("3","3")).toBe(NaN);
 });
 test("expects addInfinite() to return NaN",()=>{
    expect(addInfinite({a:3},{b:3})).toBe(NaN);
 });
 test("expects addInfinite([5],[10] to return NaN)", ()=>{
    expect(addInfinite([5],[10])).toBe(NaN);
 }
 
 );
 test("expects addInfinite([5]) to return NaN)", ()=>{
    expect(addInfinite([5])).toBe(NaN);
 }
 
 );
 test("expects addInfinite(0.1,0.2) to return NaN)", ()=>{
    expect(addInfinite(0.1,0.2)).toBe(0.3);
 }
 
 );
 test("expects addInfinite(Infinity,Infinity) to return NaN)", ()=>{
    expect(addInfinite(Infinity,Infinity)).toBe(NaN);
 }
 
 );
test("addInfinite([1,2,3])",()=>{
    expect(addInfinite([1,2,3])).toBe(NaN);
});
test("addInfinite([1,2,3],[1,2])",()=>{
    expect(addInfinite([1,2,3],[1,2])).toBe(NaN);
});