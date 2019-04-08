const sum=require("./add");
test("expects sum(2,3) to be 5",()=>{
   expect(sum(2,3)).toBe(5); 
});
test("expects sum() to return NaN",()=>{
   expect(sum()).toBe(NaN);
});
test("expects sum(1,null) to return NaN",()=>{
   expect(sum(1,null)).toBe(NaN);
});
test("expects sum(null,1) to return NaN",()=>{
   expect(sum(null,1)).toBe(NaN);
});
test("expects sum(null,null) to return NaN",()=>{
   expect(sum(null,null)).toBe(NaN);
});
test("expects sum(true,true) to return NaN",()=>{
   expect(sum(true,true)).toBe(NaN);
});
test("expects sum(true,false) to return NaN",()=>{
   expect(sum(true,false)).toBe(NaN);
});
test("expects sum(false,false) to return NaN",()=>{
   expect(sum(false,false)).toBe(NaN);
});
test("expects sum(\"3\",\"3\") to return NaN",()=>{
   expect(sum("3","3")).toBe(NaN);
});
test("expects sum() to return NaN",()=>{
   expect(sum({a:3},{b:3})).toBe(NaN);
});
test("expects sum([5],[10] to return NaN)", ()=>{
   expect(sum([5],[10])).toBe(NaN);
}

);
test("expects sum([5]) to return NaN)", ()=>{
   expect(sum([5])).toBe(NaN);
}

);
test("expects sum(0.1,0.2) to return NaN)", ()=>{
   expect(sum(0.1,0.2)).toBe(0.3);
}

);
test("expects sum(Infinity,Infinity) to return NaN)", ()=>{
   expect(sum(Infinity,Infinity)).toBe(NaN);
}

);

