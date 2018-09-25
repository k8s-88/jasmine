describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(add(20, 22)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(add(5, 5)).toBe(10);
        });
        it("should return an Error if both arguments are not numbers", function() {
            expect(add("Fish", 5)).toBe("Error!");
        });
        it("should return an Error if one argument is null", function() {
            expect(add(42, null)).toBe("Error!");
        });
    });
    describe("Subtraction test", function() {
        it("should return 42", function() {
            expect(sub(84, 42)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(sub(22, 20)).toBe(2);
        });
        it("should show an alert on error", function() {
            spyOn(window, "alert");
            sub("Fish", 42);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    describe("Multiplication test", function() {
        it("should return 8", function() {
            expect(mul(2, 4)).toBe(8);
        });
        it("Should not return 8 for different numbers", function() {
            expect(mul(3, 5)).toBe(15);
        })

        it("should show an alert on error", function() {
            spyOn(window, "alert");
            sub("String", 5);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    describe("Division test", function() {
        it("Should return 2", function() {
            expect(div(10, 5)).toBe(2);

        })
        it("Should not return 2 for different numbers", function() {
            expect(div(25, 5)).toBe(5);
        })
        it("Should return an error if both arguments are not numbers", function() {
            expect(div("String", 20)).toBe("Error!");
        });
    });
});
