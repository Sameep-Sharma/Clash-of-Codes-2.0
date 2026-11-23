import { prisma } from "../lib/db";

type SeedQuestion = {
  year: "1st";
  questionText: string;
  options: { optionId: string; optionText: string }[];
  correctOptionId: string;
  matchRound?: number;
};

export async function seedFirstYearQuestions(): Promise<void> {
  const firstYearQuestions: SeedQuestion[] = [
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint x = 5;\nprintf(\"%d \", x++);\nprintf(\"%d\", ++x);",
    "options": [
      {
        "optionId": "0",
        "optionText": "5 6"
      },
      {
        "optionId": "1",
        "optionText": "5 7"
      },
      {
        "optionId": "2",
        "optionText": "6 7"
      },
      {
        "optionId": "3",
        "optionText": "6 6"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint i;\nfor(i = 1; i <= 3; i++);\nprintf(\"%d\", i);",
    "options": [
      {
        "optionId": "0",
        "optionText": "3"
      },
      {
        "optionId": "1",
        "optionText": "1"
      },
      {
        "optionId": "2",
        "optionText": "4"
      },
      {
        "optionId": "3",
        "optionText": "Compilation error"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint a = 5;\nint b = a-- + 2;\nprintf(\"%d %d\", a, b);",
    "options": [
      {
        "optionId": "0",
        "optionText": "5 7"
      },
      {
        "optionId": "1",
        "optionText": "4 6"
      },
      {
        "optionId": "2",
        "optionText": "4 7"
      },
      {
        "optionId": "3",
        "optionText": "5 6"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the time complexity of this loop?\n\nfor (int i = 1; i < n; i *= 2) {\n    printf(\"%d\", i);\n}",
    "options": [
      {
        "optionId": "0",
        "optionText": "O(n)"
      },
      {
        "optionId": "1",
        "optionText": "O(n²)"
      },
      {
        "optionId": "2",
        "optionText": "O(log n)"
      },
      {
        "optionId": "3",
        "optionText": "O(1)"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "Find the bug in this loop.\n\nfor (int i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n    i--;\n}",
    "options": [
      {
        "optionId": "0",
        "optionText": "Missing initialization"
      },
      {
        "optionId": "1",
        "optionText": "Infinite loop"
      },
      {
        "optionId": "2",
        "optionText": "Incorrect format specifier"
      },
      {
        "optionId": "3",
        "optionText": "Syntax error"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "Identify the bug.\n\nint a = 10, b = 3;\nfloat result = a / b;\nprintf(\"%f\", result);",
    "options": [
      {
        "optionId": "0",
        "optionText": "Float cannot store division results"
      },
      {
        "optionId": "1",
        "optionText": "Integer division occurs before assignment"
      },
      {
        "optionId": "2",
        "optionText": "Incorrect format specifier"
      },
      {
        "optionId": "3",
        "optionText": "Compilation error"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the issue with this recursive function?\n\nint fact(int n) {\n    if (n == 0) return 1;\n    return n * fact(n);\n}",
    "options": [
      {
        "optionId": "0",
        "optionText": "Base condition is incorrect"
      },
      {
        "optionId": "1",
        "optionText": "Recursive call does not reduce the problem size"
      },
      {
        "optionId": "2",
        "optionText": "Multiplication cannot be used in recursion"
      },
      {
        "optionId": "3",
        "optionText": "Function cannot return an integer"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "In bubble sort (ascending), after the first complete pass, which element is guaranteed to be in its final position?",
    "options": [
      {
        "optionId": "0",
        "optionText": "Smallest element at index 0"
      },
      {
        "optionId": "1",
        "optionText": "Largest element at the last index"
      },
      {
        "optionId": "2",
        "optionText": "Middle element"
      },
      {
        "optionId": "3",
        "optionText": "No element is guaranteed"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "To check if n is prime efficiently, the divisor loop needs to run only up to:",
    "options": [
      {
        "optionId": "0",
        "optionText": "n"
      },
      {
        "optionId": "1",
        "optionText": "n/2"
      },
      {
        "optionId": "2",
        "optionText": "√n"
      },
      {
        "optionId": "3",
        "optionText": "n-1"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\n#define SQ(x) x*x\nprintf(\"%d\", SQ(2+3));",
    "options": [
      {
        "optionId": "0",
        "optionText": "25"
      },
      {
        "optionId": "1",
        "optionText": "11"
      },
      {
        "optionId": "2",
        "optionText": "10"
      },
      {
        "optionId": "3",
        "optionText": "13"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 1
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nprintf(\"%d\", 5 & 3 | 4 ^ 1);",
    "options": [
      {
        "optionId": "0",
        "optionText": "7"
      },
      {
        "optionId": "1",
        "optionText": "1"
      },
      {
        "optionId": "2",
        "optionText": "5"
      },
      {
        "optionId": "3",
        "optionText": "4"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nunsigned char c = 255;\nc++;\nprintf(\"%d\", c);",
    "options": [
      {
        "optionId": "0",
        "optionText": "256"
      },
      {
        "optionId": "1",
        "optionText": "0"
      },
      {
        "optionId": "2",
        "optionText": "-1"
      },
      {
        "optionId": "3",
        "optionText": "255"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint i = 0;\nprintf(\"%d\", i++ && i++);\nprintf(\"%d\", i);",
    "options": [
      {
        "optionId": "0",
        "optionText": "01"
      },
      {
        "optionId": "1",
        "optionText": "02"
      },
      {
        "optionId": "2",
        "optionText": "12"
      },
      {
        "optionId": "3",
        "optionText": "00"
      }
    ],
    "correctOptionId": "0",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint x = 2;\nswitch(x) {\n    case 1: printf(\"A\");\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}",
    "options": [
      {
        "optionId": "0",
        "optionText": "B"
      },
      {
        "optionId": "1",
        "optionText": "BC"
      },
      {
        "optionId": "2",
        "optionText": "BCD"
      },
      {
        "optionId": "3",
        "optionText": "C"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "On a 64-bit system, what does this print?\n\nvoid f(int arr[]) { printf(\"%zu\", sizeof(arr)); }\nint main() { int a[10]; f(a); }",
    "options": [
      {
        "optionId": "0",
        "optionText": "40"
      },
      {
        "optionId": "1",
        "optionText": "10"
      },
      {
        "optionId": "2",
        "optionText": "8"
      },
      {
        "optionId": "3",
        "optionText": "4"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the value of f(5)?\n\nint f(int n) {\n    if (n <= 1) return 1;\n    return f(n-1) + f(n-2);\n}",
    "options": [
      {
        "optionId": "0",
        "optionText": "5"
      },
      {
        "optionId": "1",
        "optionText": "8"
      },
      {
        "optionId": "2",
        "optionText": "13"
      },
      {
        "optionId": "3",
        "optionText": "10"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nint a = 10;\nif (a > 5)\n    if (a > 20)\n        printf(\"X\");\nelse\n    printf(\"Y\");",
    "options": [
      {
        "optionId": "0",
        "optionText": "X"
      },
      {
        "optionId": "1",
        "optionText": "Y"
      },
      {
        "optionId": "2",
        "optionText": "XY"
      },
      {
        "optionId": "3",
        "optionText": "Nothing is printed"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output when f() is called 3 times?\n\nvoid f() { static int c = 0; c++; printf(\"%d \", c); }",
    "options": [
      {
        "optionId": "0",
        "optionText": "1 1 1"
      },
      {
        "optionId": "1",
        "optionText": "0 1 2"
      },
      {
        "optionId": "2",
        "optionText": "1 2 3"
      },
      {
        "optionId": "3",
        "optionText": "0 0 0"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output? (C99 or later)\n\nprintf(\"%d %d\", -7 / 2, -7 % 2);",
    "options": [
      {
        "optionId": "0",
        "optionText": "-4 -1"
      },
      {
        "optionId": "1",
        "optionText": "-3 -1"
      },
      {
        "optionId": "2",
        "optionText": "-3 1"
      },
      {
        "optionId": "3",
        "optionText": "-4 1"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the time complexity?\n\nfor (int i = 1; i <= n; i++)\n    for (int j = 1; j <= i; j *= 2)\n        printf(\"*\");",
    "options": [
      {
        "optionId": "0",
        "optionText": "O(n)"
      },
      {
        "optionId": "1",
        "optionText": "O(n²)"
      },
      {
        "optionId": "2",
        "optionText": "O(n log n)"
      },
      {
        "optionId": "3",
        "optionText": "O(log n)"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 2
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nprint(0.1 + 0.2 == 0.3)",
    "options": [
      {
        "optionId": "0",
        "optionText": "True"
      },
      {
        "optionId": "1",
        "optionText": "False"
      },
      {
        "optionId": "2",
        "optionText": "Error"
      },
      {
        "optionId": "3",
        "optionText": "None"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\ndef f(a, l=[]):\n    l.append(a)\n    return l\nf(1)\nprint(f(2))",
    "options": [
      {
        "optionId": "0",
        "optionText": "[2]"
      },
      {
        "optionId": "1",
        "optionText": "[1]"
      },
      {
        "optionId": "2",
        "optionText": "[1, 2]"
      },
      {
        "optionId": "3",
        "optionText": "[1, [2]]"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nt = (1, 2, [3, 4])\nt[2].append(5)\nprint(t)",
    "options": [
      {
        "optionId": "0",
        "optionText": "TypeError"
      },
      {
        "optionId": "1",
        "optionText": "(1, 2, [3, 4])"
      },
      {
        "optionId": "2",
        "optionText": "(1, 2, [3, 4, 5])"
      },
      {
        "optionId": "3",
        "optionText": "(1, 2, 3, 4, 5)"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nprint([i for i in range(5) if i % 2][::-1])",
    "options": [
      {
        "optionId": "0",
        "optionText": "[1, 3]"
      },
      {
        "optionId": "1",
        "optionText": "[3, 1]"
      },
      {
        "optionId": "2",
        "optionText": "[4, 2, 0]"
      },
      {
        "optionId": "3",
        "optionText": "[0, 2, 4]"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nx = 10\ndef f():\n    print(x)\n    x = 5\nf()",
    "options": [
      {
        "optionId": "0",
        "optionText": "10"
      },
      {
        "optionId": "1",
        "optionText": "5"
      },
      {
        "optionId": "2",
        "optionText": "UnboundLocalError"
      },
      {
        "optionId": "3",
        "optionText": "NameError"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nfs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "options": [
      {
        "optionId": "0",
        "optionText": "[0, 1, 2]"
      },
      {
        "optionId": "1",
        "optionText": "[2, 2, 2]"
      },
      {
        "optionId": "2",
        "optionText": "[3, 3, 3]"
      },
      {
        "optionId": "3",
        "optionText": "[0, 0, 0]"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nprint(bool(\"False\"), bool(\"\"))",
    "options": [
      {
        "optionId": "0",
        "optionText": "False False"
      },
      {
        "optionId": "1",
        "optionText": "True True"
      },
      {
        "optionId": "2",
        "optionText": "True False"
      },
      {
        "optionId": "3",
        "optionText": "False True"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\na = [1, 2, 3]\nprint(a is a[:], a == a[:])",
    "options": [
      {
        "optionId": "0",
        "optionText": "True True"
      },
      {
        "optionId": "1",
        "optionText": "False False"
      },
      {
        "optionId": "2",
        "optionText": "True False"
      },
      {
        "optionId": "3",
        "optionText": "False True"
      }
    ],
    "correctOptionId": "3",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nd = {}\nd[1] = \"a\"\nd[1.0] = \"b\"\nd[True] = \"c\"\nprint(d)",
    "options": [
      {
        "optionId": "0",
        "optionText": "{1: 'c'}"
      },
      {
        "optionId": "1",
        "optionText": "{1: 'a', 1.0: 'b', True: 'c'}"
      },
      {
        "optionId": "2",
        "optionText": "{1: 'a', True: 'c'}"
      },
      {
        "optionId": "3",
        "optionText": "TypeError"
      }
    ],
    "correctOptionId": "0",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the output?\n\nprint(-7 // 2)",
    "options": [
      {
        "optionId": "0",
        "optionText": "-3"
      },
      {
        "optionId": "1",
        "optionText": "-4"
      },
      {
        "optionId": "2",
        "optionText": "3"
      },
      {
        "optionId": "3",
        "optionText": "-3.5"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 3
  },
  {
    "year": "1st",
    "questionText": "What is the binary representation of the hexadecimal number 0x3D?",
    "options": [
      {
        "optionId": "0",
        "optionText": "00111101"
      },
      {
        "optionId": "1",
        "optionText": "00111110"
      },
      {
        "optionId": "2",
        "optionText": "00101101"
      },
      {
        "optionId": "3",
        "optionText": "01011101"
      }
    ],
    "correctOptionId": "0",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "In an 8-bit signed two's complement system, what is the binary representation of the decimal integer -5?",
    "options": [
      {
        "optionId": "0",
        "optionText": "10000101"
      },
      {
        "optionId": "1",
        "optionText": "11111011"
      },
      {
        "optionId": "2",
        "optionText": "11111010"
      },
      {
        "optionId": "3",
        "optionText": "11110101"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "If an unsigned integer x has the value 12, what is the result of the bitwise expression (x << 2) | 1?",
    "options": [
      {
        "optionId": "0",
        "optionText": "25"
      },
      {
        "optionId": "1",
        "optionText": "48"
      },
      {
        "optionId": "2",
        "optionText": "49"
      },
      {
        "optionId": "3",
        "optionText": "50"
      }
    ],
    "correctOptionId": "2",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "Which of the following logic gates is known as a \"Universal Gate\" because any Boolean function can be constructed using only this gate?",
    "options": [
      {
        "optionId": "0",
        "optionText": "XOR"
      },
      {
        "optionId": "1",
        "optionText": "NAND"
      },
      {
        "optionId": "2",
        "optionText": "AND"
      },
      {
        "optionId": "3",
        "optionText": "OR"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "Which of the following correctly lists computer memory components in order from fastest access speed to slowest access speed?",
    "options": [
      {
        "optionId": "0",
        "optionText": "CPU Registers -> Cache Memory -> Main Memory (RAM) -> Hard Disk (SSD/HDD)"
      },
      {
        "optionId": "1",
        "optionText": "Cache Memory -> CPU Registers -> Main Memory (RAM) -> Hard Disk (SSD/HDD)"
      },
      {
        "optionId": "2",
        "optionText": "CPU Registers -> Main Memory (RAM) -> Cache Memory -> Hard Disk (SSD/HDD)"
      },
      {
        "optionId": "3",
        "optionText": "Main Memory (RAM) -> Cache Memory -> CPU Registers -> Hard Disk (SSD/HDD)"
      }
    ],
    "correctOptionId": "0",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "Which statement best describes the fundamental difference between a compiler and an interpreter?",
    "options": [
      {
        "optionId": "0",
        "optionText": "A compiler translates entire source code into machine code before execution, whereas an interpreter translates and executes code line by line at runtime."
      },
      {
        "optionId": "1",
        "optionText": "A compiler is used only for object-oriented languages, whereas an interpreter is used only for functional languages."
      },
      {
        "optionId": "2",
        "optionText": "An interpreter generates a standalone executable file, whereas a compiler requires the original source code during execution."
      },
      {
        "optionId": "3",
        "optionText": "A compiler executes code slower than an interpreter because it interprets instructions dynamically."
      }
    ],
    "correctOptionId": "0",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "In standard ASCII encoding, the uppercase character 'A' has a decimal value of 65. What character is represented by the expression ('A' + 32)?",
    "options": [
      {
        "optionId": "0",
        "optionText": "'a' (lowercase a)"
      },
      {
        "optionId": "1",
        "optionText": "'z' (lowercase z)"
      },
      {
        "optionId": "2",
        "optionText": "' ' (Space)"
      },
      {
        "optionId": "3",
        "optionText": "'b' (lowercase b)"
      }
    ],
    "correctOptionId": "0",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "What is the key difference between a MAC address and an IP address in computer networking?",
    "options": [
      {
        "optionId": "0",
        "optionText": "A MAC address is a 48-bit physical hardware identifier burned into the NIC, whereas an IP address is a logical address assigned for routing on a network."
      },
      {
        "optionId": "1",
        "optionText": "A MAC address changes whenever a device connects to a new Wi-Fi network, whereas an IP address is permanently fixed."
      },
      {
        "optionId": "2",
        "optionText": "A MAC address operates at the Application Layer, whereas an IP address operates at the Physical Layer."
      },
      {
        "optionId": "3",
        "optionText": "A MAC address is 32 bits long, whereas an IPv4 address is 64 bits long."
      }
    ],
    "correctOptionId": "0",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "How many bits are there in 1.5 Kilobytes (KB), assuming the standard binary convention where 1 KB = 1024 bytes?",
    "options": [
      {
        "optionId": "0",
        "optionText": "12,000 bits"
      },
      {
        "optionId": "1",
        "optionText": "12,288 bits"
      },
      {
        "optionId": "2",
        "optionText": "15,360 bits"
      },
      {
        "optionId": "3",
        "optionText": "1,536 bits"
      }
    ],
    "correctOptionId": "1",
    "matchRound": 4
  },
  {
    "year": "1st",
    "questionText": "Why do modern operating systems provide distinct \"User Mode\" and \"Kernel Mode\" CPU execution levels?",
    "options": [
      {
        "optionId": "0",
        "optionText": "To allow multiple users to play online games without installing device drivers."
      },
      {
        "optionId": "1",
        "optionText": "To protect system stability by preventing user applications from directly executing privileged hardware instructions."
      },
      {
        "optionId": "2",
        "optionText": "To double the CPU clock speed when running operating system background services."
      },
      {
        "optionId": "3",
        "optionText": "To allow 32-bit software to run natively on 64-bit processors without recompilation."
      }
    ],
    "correctOptionId": "1",
    "matchRound": 4
  }
];

  await prisma.question.createMany({
    data: firstYearQuestions,
    skipDuplicates: true
  });

  console.log(`Seeded ${firstYearQuestions.length} first year questions`);
}
