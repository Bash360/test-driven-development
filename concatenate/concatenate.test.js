const concatenate=require("./concatenate");
test("expects, concatenate(\"mark\",\"bash\") to return markbash",()=>{
    expect(concatenate("mark","bash")).toBe("markbash");
});
test("expects, concatenate(true,false) to return not a string",()=>{
    expect(concatenate(true,false)).toBe("not a string");
});
test("expects concatenate() to return does not accept empty strings",()=>{
    expect(concatenate("","")).toBe("cannot be empty");
});
test("expects concatenate(null,null) to return not a string",()=>{
    expect(concatenate(null,null)).toBe("not a string");
});
test("expects concatenate(null,null) to return not a string",()=>{
    expect(concatenate(Infinity,Infinity)).toBe("not a string");
});
test("expects concatenate(1,4) to return not a string",()=>{
    expect(concatenate(1,4)).toBe("not a string");
});
test("expects concatenate(undefined,undefined) to return not a string",()=>{
    expect(concatenate(undefined,undefined)).toBe("not a string");
});

