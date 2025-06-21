const questions = [
    // Functions (10 questions)
    {
        id: 1,
        question: "What type of function is f(x) = 5?",
        options: ["Linear", "Quadratic", "Constant", "Rational"],
        answer: "Constant"
    },
    {
        id: 2,
        question: "For f(x) = |x-3|, what is f(0)?",
        options: ["0", "3", "-3", "Undefined"],
        answer: "3"
    },
    {
        id: 3,
        question: "The domain of f(x) = √(x-2) is:",
        options: ["x > 2", "x ≥ 2", "x < 2", "All real numbers"],
        answer: "x ≥ 2"
    },
    {
        id: 4,
        question: "For the signum function, sgn(-5) = ?",
        options: ["1", "-1", "0", "5"],
        answer: "-1"
    },
    {
        id: 5,
        question: "The Heaviside function H(x) equals 0 when:",
        options: ["x > 0", "x < 0", "x ≤ 0", "x ≥ 0"],
        answer: "x ≤ 0"
    },
    {
        id: 6,
        question: "What is the range of f(x) = x²?",
        options: ["All real numbers", "[0, ∞)", "(-∞, 0]", "[1, ∞)"],
        answer: "[0, ∞)"
    },
    {
        id: 7,
        question: "For the greatest integer function, [3.7] = ?",
        options: ["3", "4", "3.7", "0"],
        answer: "3"
    },
    {
        id: 8,
        question: "Which function is rational?",
        options: ["x² + 1", "√x", "eˣ", "1/(x+2)"],
        answer: "1/(x+2)"
    },
    {
        id: 9,
        question: "f(x) = 2x + 3 is classified as:",
        options: ["Constant", "Linear", "Quadratic", "Exponential"],
        answer: "Linear"
    },
    {
        id: 10,
        question: "The inverse of f(x) = 2x is:",
        options: ["f⁻¹(x) = x/2", "f⁻¹(x) = 2/x", "f⁻¹(x) = -2x", "f⁻¹(x) = x²"],
        answer: "f⁻¹(x) = x/2"
    },

    // Derivatives (15 questions)
    {
        id: 11,
        question: "The derivative of x⁴ is:",
        options: ["4x³", "3x⁴", "4x", "x³"],
        answer: "4x³"
    },
    {
        id: 12,
        question: "d/dx [sin(2x)] = ?",
        options: ["cos(2x)", "2cos(2x)", "-2cos(2x)", "sin(2x)"],
        answer: "2cos(2x)"
    },
    {
        id: 13,
        question: "For position s(t) = t², velocity at t=3 is:",
        options: ["3 m/s", "6 m/s", "9 m/s", "0 m/s"],
        answer: "6 m/s"
    },
    {
        id: 14,
        question: "The product rule is used for:",
        options: ["f(g(x))", "f(x)/g(x)", "f(x)·g(x)", "Inverse functions"],
        answer: "f(x)·g(x)"
    },
    {
        id: 15,
        question: "Second derivative of x³ is:",
        options: ["3x²", "6x", "6", "x⁴/4"],
        answer: "6x"
    },
    {
        id: 16,
        question: "Implicit differentiation finds dy/dx for:",
        options: ["y = f(x)", "Equations like x² + y² = 25", "Inverse functions", "Parametric equations"],
        answer: "Equations like x² + y² = 25"
    },
    {
        id: 17,
        question: "d/dx [eˣ cos(x)] requires:",
        options: ["Chain rule", "Product rule", "Quotient rule", "Implicit differentiation"],
        answer: "Product rule"
    },
    {
        id: 18,
        question: "The derivative represents:",
        options: ["Area under curve", "Slope of tangent line", "Accumulated change", "Average rate"],
        answer: "Slope of tangent line"
    },
    {
        id: 19,
        question: "If f'(x) = 0 at x=c, it may be:",
        options: ["Maximum", "Minimum", "Inflection point", "All of these"],
        answer: "All of these"
    },
    {
        id: 20,
        question: "d/dx [ln(x)] = ?",
        options: ["1/x", "eˣ", "x", "1"],
        answer: "1/x"
    },

    // Integrals (15 questions)
    {
        id: 21,
        question: "∫(3x²) dx = ?",
        options: ["x³ + C", "3x³ + C", "6x + C", "x² + C"],
        answer: "x³ + C"
    },
    {
        id: 22,
        question: "The definite integral ∫₀¹ x dx equals:",
        options: ["0.5", "1", "1.5", "2"],
        answer: "0.5"
    },
    {
        id: 23,
        question: "∫eˣ dx = ?",
        options: ["eˣ + C", "ln|x| + C", "xeˣ + C", "eˣ/x + C"],
        answer: "eˣ + C"
    },
    {
        id: 24,
        question: "The area under y=x from 0 to 2 is:",
        options: ["2", "4", "1", "0"],
        answer: "2"
    },
    {
        id: 25,
        question: "Integration by parts is used for:",
        options: ["f(g(x))", "Rational functions", "Products of functions", "Trigonometric functions"],
        answer: "Products of functions"
    },
    {
        id: 26,
        question: "∫cos(x) dx = ?",
        options: ["sin(x) + C", "-cos(x) + C", "-sin(x) + C", "cos(x) + C"],
        answer: "sin(x) + C"
    },
    {
        id: 27,
        question: "The Fundamental Theorem of Calculus connects:",
        options: ["Derivatives and integrals", "Limits and continuity", "Functions and inverses", "Area and volume"],
        answer: "Derivatives and integrals"
    },
    {
        id: 28,
        question: "∫(1/x) dx = ?",
        options: ["ln|x| + C", "1/x² + C", "-1/x² + C", "x ln x + C"],
        answer: "ln|x| + C"
    },
    {
        id: 29,
        question: "Volume of revolution uses:",
        options: ["Derivatives", "Washer method", "L'Hôpital's rule", "Implicit differentiation"],
        answer: "Washer method"
    },
    {
        id: 30,
        question: "∫sec²(x) dx = ?",
        options: ["tan(x) + C", "sec(x) + C", "cot(x) + C", "csc(x) + C"],
        answer: "tan(x) + C"
    },

    // Limits (10 questions)
    {
        id: 31,
        question: "lim┬(x→2)(x² - 4)/(x-2) = ?",
        options: ["0", "2", "4", "Undefined"],
        answer: "4"
    },
    {
        id: 32,
        question: "lim┬(x→∞)(2x+1)/(3x-5) = ?",
        options: ["0", "1/3", "2/3", "1"],
        answer: "2/3"
    },
    {
        id: 33,
        question: "Continuity at x=a requires:",
        options: ["f(a) defined", "lim┬(x→a)f(x) exists", "Limit equals f(a)", "All of these"],
        answer: "All of these"
    },
    {
        id: 34,
        question: "lim┬(x→0) sin(x)/x = ?",
        options: ["0", "1", "∞", "Undefined"],
        answer: "1"
    },
    {
        id: 35,
        question: "L'Hôpital's rule applies to:",
        options: ["0/0 forms", "∞/∞ forms", "Both", "Neither"],
        answer: "Both"
    },
    {
        id: 36,
        question: "lim┬(x→5) √(x-1) = ?",
        options: ["0", "2", "√5", "Undefined"],
        answer: "2"
    },
    {
        id: 37,
        question: "A function is differentiable if:",
        options: ["Continuous", "Smooth with no corners", "Limit exists", "All of these"],
        answer: "All of these"
    },
    {
        id: 38,
        question: "lim┬(x→0)(1 - cosx)/x = ?",
        options: ["0", "1", "∞", "Undefined"],
        answer: "0"
    },
    {
        id: 39,
        question: "Infinite limit lim┬(x→0) 1/x² = ?",
        options: ["0", "1", "∞", "Undefined"],
        answer: "∞"
    },
    {
        id: 40,
        question: "lim┬(x→3) (x²-9)/(x-3) = ?",
        options: ["0", "3", "6", "9"],
        answer: "6"
    },

    // Applications (10 questions)
    {
        id: 41,
        question: "Critical points occur where:",
        options: ["f'(x)=0", "f''(x)=0", "f(x)=0", "Limit doesn't exist"],
        answer: "f'(x)=0"
    },
    {
        id: 42,
        question: "For f(x)=x³-3x, the inflection point is at:",
        options: ["x=0", "x=1", "x=2", "x=3"],
        answer: "x=0"
    },
    {
        id: 43,
        question: "Minimum value of f(x)=x²-4x+5 is:",
        options: ["1", "5", "0", "2"],
        answer: "1"
    },
    {
        id: 44,
        question: "When velocity is positive and acceleration negative:",
        options: ["Speed increasing", "Speed decreasing", "Constant speed", "At rest"],
        answer: "Speed decreasing"
    },
    {
        id: 45,
        question: "The tangent to y=x² at x=1 has slope:",
        options: ["0", "1", "2", "4"],
        answer: "2"
    },
    {
        id: 46,
        question: "Point of inflection occurs when:",
        options: ["f'(x)=0", "f''(x)=0", "f(x)=0", "Limit exists"],
        answer: "f''(x)=0"
    },
    {
        id: 47,
        question: "Area between y=x and y=x² from 0 to 1 is:",
        options: ["1/6", "1/2", "1/3", "1"],
        answer: "1/6"
    },
    {
        id: 48,
        question: "For maximum profit, marginal revenue should equal:",
        options: ["Marginal cost", "Average cost", "Fixed cost", "Zero"],
        answer: "Marginal cost"
    },
    {
        id: 49,
        question: "Volume of solid from rotating y=x² about x-axis [0,2] is:",
        options: ["π∫x⁴dx", "π∫x²dx", "2π∫x³dx", "π∫xdx"],
        answer: "π∫x⁴dx"
    },
    {
        id: 50,
        question: "If f''(x) > 0, the function is:",
        options: ["Concave up", "Concave down", "Decreasing", "Constant"],
        answer: "Concave up"
    }
];