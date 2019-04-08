const divide=require("./div");
test("divide(4/2) to return 2",()=>{
expect(divide(4,2)).toBe(2);
});
test("divide(4/0) to return 0",()=>{
    expect(divide(4,0)).toBe("cant divide by zero");
    });
test("divide(\"mark\",\"bash\") to return NaN",()=>{
     expect(divide("mark","bash")).toBe(NaN);
        });
test("divide(true,true) to return NaN",()=>{
            expect(divide(true,true)).toBe(NaN);
               });
               test("divide(null,null) to return NaN",()=>{
                expect(divide(null,null)).toBe(NaN);
                   });
                   test("divide(undefined,undefined) to return NaN",()=>{
                    expect(divide(undefined,undefined)).toBe(NaN);
                       });
                       test("divide() to return NaN",()=>{
                        expect(divide()).toBe(NaN);
                           });
                           test("divide(4,-1) to return NaN",()=>{
                            expect(divide(4,-1)).toBe(-4);
                               });
                               test("divide(4,Infinity) to return NaN",()=>{
                                expect(divide(4,Infinity)).toBe(NaN);
                                   });
                
            
        
                       
    