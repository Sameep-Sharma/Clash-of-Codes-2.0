import { prisma } from "../lib/db";

type SeedQuestion = {
  year: "2nd";
  questionText: string;
  options: { optionId: string; optionText: string }[];
  correctOptionId: string;
  matchRound?: number;
};

export async function seedSecondYearQuestions(): Promise<void> {
  const secondYearQuestions: SeedQuestion[] = [
    {
      year: "2nd",
      questionText: "A process is in the Ready state. Which event will most likely cause it to transition to the Running state?",
      options: [
        { optionId: "0", optionText: "I/O operation completes" },
        { optionId: "1", optionText: "CPU scheduler selects it for execution" },
        { optionId: "2", optionText: "It requests a file from disk" },
        { optionId: "3", optionText: "It terminates" }
      ],
      correctOptionId: "1",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Three processes arrive at time 0 and are executed using FCFS scheduling.\n\nP1 burst: 8 ms\nP2 burst: 4 ms\nP3 burst: 2 ms\n\nWhat is the average waiting time?",
      options: [
        { optionId: "0", optionText: "4 ms" },
        { optionId: "1", optionText: "6 ms" },
        { optionId: "2", optionText: "6.67 ms" },
        { optionId: "3", optionText: "8 ms" }
      ],
      correctOptionId: "2",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Consider the following processes scheduled using Shortest Remaining Time First (SRTF) preemptive scheduling:\n\nP1: Arrival Time = 0 ms, Burst Time = 6 ms\nP2: Arrival Time = 2 ms, Burst Time = 3 ms\nP3: Arrival Time = 4 ms, Burst Time = 3 ms\nP4: Arrival Time = 5 ms, Burst Time = 5 ms\n\nWhat is the average waiting time of all processes?",
      options: [
        { optionId: "0", optionText: "3.5 ms" },
        { optionId: "1", optionText: "4.0 ms" },
        { optionId: "2", optionText: "4.5 ms" },
        { optionId: "3", optionText: "5.0 ms" }
      ],
      correctOptionId: "0",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Consider the following processes under non-preemptive SJF scheduling. All processes arrive at time 0.\n\nP1: 7 ms\nP2: 4 ms\nP3: 1 ms\nP4: 4 ms\n\nIf ties are broken by the given process order, what is the average waiting time?",
      options: [
        { optionId: "0", optionText: "4.25" },
        { optionId: "1", optionText: "5.25" },
        { optionId: "2", optionText: "6.00" },
        { optionId: "3", optionText: "6.75" }
      ],
      correctOptionId: "0",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Which statement about deadlock prevention is correct?",
      options: [
        { optionId: "0", optionText: "Allow circular wait but eliminate mutual exclusion" },
        { optionId: "1", optionText: "Ensure at least one of the necessary deadlock conditions cannot hold" },
        { optionId: "2", optionText: "Allocate all resources only after a process terminates" },
        { optionId: "3", optionText: "Deadlock prevention and deadlock detection are the same" }
      ],
      correctOptionId: "1",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "A process repeatedly accesses a small set of pages, but the system allocates it too few frames to hold those pages. As a result, the CPU utilization drops significantly even though the ready queue contains several processes. Which of the following best explains why the operating system might mistakenly increase the degree of multiprogramming, making the situation worse?",
      options: [
        {
          optionId: "0",
          optionText: "The system is experiencing internal fragmentation, causing processes to waste CPU time."
        },
        {
          optionId: "1",
          optionText: "Thrashing causes excessive paging activity, and the OS may incorrectly interpret low CPU utilization as a reason to load more processes."
        },
        {
          optionId: "2",
          optionText: "Deadlock prevents the CPU scheduler from scheduling any process, regardless of available resources."
        },
        {
          optionId: "3",
          optionText: "Context switching increases the physical memory capacity, causing page replacement."
        }
      ],
      correctOptionId: "1",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Which of the following best describes thrashing?",
      options: [
        { optionId: "0", optionText: "A process spends more time executing instructions than accessing memory." },
        { optionId: "1", optionText: "The system spends excessive time swapping pages instead of executing useful work." },
        { optionId: "2", optionText: "CPU utilization increases due to more processes." },
        { optionId: "3", optionText: "A process permanently occupies the CPU." }
      ],
      correctOptionId: "1",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "A system has 3 processes (P1, P2, P3) and 2 resource types (A and B). The total instances are A = 7 and B = 6.\n\nCurrent state:\nProcess | Allocation (A, B) | Maximum (A, B)\nP1 | (2, 1) | (5, 3)\nP2 | (1, 2) | (3, 4)\nP3 | (2, 1) | (5, 2)\n\nAvailable resources = (2, 2).\n\nUsing the Banker's Algorithm, which of the following is a valid safe sequence?",
      options: [
        { optionId: "0", optionText: "P1 -> P2 -> P3" },
        { optionId: "1", optionText: "P2 -> P1 -> P3" },
        { optionId: "2", optionText: "P3 -> P2 -> P1" },
        { optionId: "3", optionText: "The system is in an unsafe state; no safe sequence exists." }
      ],
      correctOptionId: "1",
      matchRound: 1
    },
    {
      year: "2nd",
      questionText: "Three processes execute using Round Robin scheduling with a time quantum of 2 ms. All arrive at time 0.\n\nP1 burst: 5 ms\nP2 burst: 3 ms\nP3 burst: 1 ms\n\nUsing the order P1 -> P2 -> P3 initially, what is the average turnaround time?",
      options: [
        { optionId: "0", optionText: "7 ms" },
        { optionId: "1", optionText: "8 ms" },
        { optionId: "2", optionText: "8.67 ms" },
        { optionId: "3", optionText: "9 ms" }
      ],
      correctOptionId: "2",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "A mutex is locked by Thread T1. Thread T2 attempts to lock the same mutex. What happens in a typical blocking mutex implementation?",
      options: [
        { optionId: "0", optionText: "T2 enters the critical section anyway." },
        { optionId: "1", optionText: "T2 spins forever regardless of mutex implementation." },
        { optionId: "2", optionText: "T2 waits until T1 releases the mutex." },
        { optionId: "3", optionText: "The operating system terminates T1." }
      ],
      correctOptionId: "2",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "What is the output?\n\nint a[] = {3, 1, 4, 1, 5};\nint n = 5;\n\nint x = 0;\nfor(int i = 0; i < n; i++) {\n    x ^= a[i];\n}\n\ncout << x;",
      options: [
        { optionId: "0", optionText: "2" },
        { optionId: "1", optionText: "3" },
        { optionId: "2", optionText: "4" },
        { optionId: "3", optionText: "5" }
      ],
      correctOptionId: "0",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "Given the array arr = [3, -2, 5, -1, 6, -3, 2] and k = 3, how many contiguous subarrays have a sum divisible by k? (Count non-empty subarrays only.)",
      options: [
        { optionId: "0", optionText: "7" },
        { optionId: "1", optionText: "8" },
        { optionId: "2", optionText: "9" },
        { optionId: "3", optionText: "10" }
      ],
      correctOptionId: "0",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "Consider the following code:\n\nint a[] = {1, 2, 3, 4, 5};\nint n = 5;\n\nfor(int i = 0; i < n; i++) {\n    a[i] = a[i] + a[n - 1 - i];\n}\n\nWhat will happen?",
      options: [
        { optionId: "0", optionText: "The array becomes [6, 6, 6, 10, 11]" },
        { optionId: "1", optionText: "The array becomes [6, 6, 6, 6, 6] only because original values are preserved" },
        { optionId: "2", optionText: "The array becomes [6, 6, 6, 8, 10]" },
        { optionId: "3", optionText: "The array becomes [6, 6, 6, 7, 8]" }
      ],
      correctOptionId: "0",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "What is printed?\n\nstring s = \"abac\";\nint count = 0;\n\nfor(int i = 0; i < s.size(); i++) {\n    for(int j = i + 1; j < s.size(); j++) {\n        if(s[i] == s[j]) count++;\n    }\n}\n\ncout << count;",
      options: [
        { optionId: "0", optionText: "0" },
        { optionId: "1", optionText: "1" },
        { optionId: "2", optionText: "2" },
        { optionId: "3", optionText: "3" }
      ],
      correctOptionId: "1",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "What is the length of the longest substring without repeating characters in \"pwwkew\"?",
      options: [
        { optionId: "0", optionText: "2" },
        { optionId: "1", optionText: "3" },
        { optionId: "2", optionText: "4" },
        { optionId: "3", optionText: "5" }
      ],
      correctOptionId: "1",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "A string s = \"aabbcc\" is processed using the following logic:\n\nstring t = \"\";\n\nfor(char c : s) {\n    if(t.empty() || t.back() != c)\n        t.push_back(c);\n}\n\nWhat is the value of t?",
      options: [
        { optionId: "0", optionText: "aabbcc" },
        { optionId: "1", optionText: "abc" },
        { optionId: "2", optionText: "ac" },
        { optionId: "3", optionText: "Empty string" }
      ],
      correctOptionId: "1",
      matchRound: 2
    },
    {
      year: "2nd",
      questionText: "What is the time complexity of finding the middle node of a singly linked list using slow and fast pointers?",
      options: [
        { optionId: "0", optionText: "O(1)" },
        { optionId: "1", optionText: "O(log n)" },
        { optionId: "2", optionText: "O(n)" },
        { optionId: "3", optionText: "O(n^2)" }
      ],
      correctOptionId: "2",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "What will be printed by the following code if the list is 1 -> 2 -> 3 -> 4 -> NULL?\n\nNode* slow = head;\nNode* fast = head;\n\nwhile(fast != NULL && fast->next != NULL) {\n    slow = slow->next;\n    fast = fast->next->next;\n}\n\ncout << slow->data;",
      options: [
        { optionId: "0", optionText: "2" },
        { optionId: "1", optionText: "3" },
        { optionId: "2", optionText: "4" },
        { optionId: "3", optionText: "Runtime error" }
      ],
      correctOptionId: "0",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "Consider the linked list 10 -> 20 -> 30 -> 40 -> NULL.\n\nNode* temp = head->next;\nhead->next = temp->next;\ntemp->next = head;\nhead = temp;\n\nWhat is the resulting list?",
      options: [
        { optionId: "0", optionText: "10 -> 20 -> 30 -> 40" },
        { optionId: "1", optionText: "20 -> 10 -> 30 -> 40" },
        { optionId: "2", optionText: "20 -> 30 -> 10 -> 40" },
        { optionId: "3", optionText: "10 -> 30 -> 20 -> 40" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "What is the output of the following function when called with a list 1 -> 2 -> 3 -> 4 -> NULL?\n\nvoid fun(Node* head) {\n    if(head == NULL)\n        return;\n\n    cout << head->data << \" \";\n    fun(head->next);\n    cout << head->data << \" \";\n}",
      options: [
        { optionId: "0", optionText: "1 2 3 4" },
        { optionId: "1", optionText: "4 3 2 1" },
        { optionId: "2", optionText: "1 2 3 4 4 3 2 1" },
        { optionId: "3", optionText: "1 2 3 4 1 2 3 4" }
      ],
      correctOptionId: "2",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "In a singly linked list, which operation requires O(n) time if only the head pointer is available and the list is not doubly linked?",
      options: [
        { optionId: "0", optionText: "Insert a node at the beginning" },
        { optionId: "1", optionText: "Delete the head node" },
        { optionId: "2", optionText: "Access the kth node" },
        { optionId: "3", optionText: "Insert after a given node pointer" }
      ],
      correctOptionId: "2",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "Consider a singly linked list: 1 -> 2 -> 3 -> 4 -> 5 -> NULL. What will be the resulting list after executing the following code?\n\nNode* prev = head;\nNode* curr = head->next;\n\nwhile(curr != NULL) {\n    Node* nextNode = curr->next;\n    curr->next = prev;\n    prev = curr;\n    curr = nextNode;\n}\nhead->next = NULL;\nhead = prev;",
      options: [
        { optionId: "0", optionText: "1 -> 2 -> 3 -> 4 -> 5 -> NULL" },
        { optionId: "1", optionText: "5 -> 4 -> 3 -> 2 -> 1 -> NULL" },
        { optionId: "2", optionText: "5 -> 4 -> 3 -> 2 -> NULL" },
        { optionId: "3", optionText: "2 -> 3 -> 4 -> 5 -> 1 -> NULL" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "Given the sorted array [-4, -1, 2, 3, 5, 7, 9], how many unique pairs of indices (i, j), where i < j, have a sum equal to 8 using the two-pointer approach?",
      options: [
        { optionId: "0", optionText: "1" },
        { optionId: "1", optionText: "2" },
        { optionId: "2", optionText: "3" },
        { optionId: "3", optionText: "4" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "What is the maximum sum of a subarray of size 3 in the array [4, 2, 1, 7, 8, 1]?",
      options: [
        { optionId: "0", optionText: "13" },
        { optionId: "1", optionText: "14" },
        { optionId: "2", optionText: "16" },
        { optionId: "3", optionText: "17" }
      ],
      correctOptionId: "2",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "Given the array [1, 2, 1, 1, 3, 4, 2], what is the length of the longest subarray containing at most 2 distinct elements?",
      options: [
        { optionId: "0", optionText: "3" },
        { optionId: "1", optionText: "4" },
        { optionId: "2", optionText: "5" },
        { optionId: "3", optionText: "6" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "In a sorted array [1, 1, 2, 2, 2, 3, 4], two pointers are used to remove duplicates in-place. If the write pointer is updated only when a new distinct element is found, how many unique elements will be present in the valid prefix?",
      options: [
        { optionId: "0", optionText: "3" },
        { optionId: "1", optionText: "4" },
        { optionId: "2", optionText: "5" },
        { optionId: "3", optionText: "7" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "Which of the following conditions is required for the standard sliding-window technique that expands and shrinks based on the sum to correctly find a shortest subarray with sum at least k?",
      options: [
        { optionId: "0", optionText: "All array elements must be negative" },
        { optionId: "1", optionText: "Array elements must be non-negative" },
        { optionId: "2", optionText: "The array must be sorted" },
        { optionId: "3", optionText: "The array must contain only distinct elements" }
      ],
      correctOptionId: "1",
      matchRound: 3
    },
    {
      year: "2nd",
      questionText: "An initially empty stack performs the following operations:\n\npush(4), push(9), push(6), pop(), push(top() + 3), push(2), pop(), push(top() * 2), pop(), pop()\n\nWhat is the final stack from bottom to top?",
      options: [
        { optionId: "0", optionText: "4, 9" },
        { optionId: "1", optionText: "4, 12" },
        { optionId: "2", optionText: "4, 9, 6" },
        { optionId: "3", optionText: "4" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "What is the output?\n\nstack<int> s;\ns.push(1);\ns.push(2);\ns.push(3);\n\nwhile(!s.empty()) {\n    cout << s.top() << \" \";\n    s.pop();\n}",
      options: [
        { optionId: "0", optionText: "1 2 3" },
        { optionId: "1", optionText: "3 2 1" },
        { optionId: "2", optionText: "1 3 2" },
        { optionId: "3", optionText: "2 1 3" }
      ],
      correctOptionId: "1",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "Which of the following sequences of parentheses is valid?",
      options: [
        { optionId: "0", optionText: "((())())" },
        { optionId: "1", optionText: "(()))(()" },
        { optionId: "2", optionText: "())(()" },
        { optionId: "3", optionText: "((()" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "What is the output of the following Next Greater Element logic?\n\nint a[] = {4, 5, 2, 10};\nstack<int> s;\n\nfor(int i = 0; i < 4; i++) {\n    while(!s.empty() && a[s.top()] < a[i])\n        s.pop();\n    s.push(i);\n}\n\ncout << s.size();",
      options: [
        { optionId: "0", optionText: "1" },
        { optionId: "1", optionText: "2" },
        { optionId: "2", optionText: "3" },
        { optionId: "3", optionText: "4" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A queue is implemented using two stacks (S1 and S2). Enqueue pushes elements into S1. Dequeue transfers all elements from S1 to S2 only when S2 is empty, then pops from S2. Starting with both stacks empty, perform: Enqueue(1), Enqueue(2), Enqueue(3), Dequeue(), Enqueue(4), Enqueue(5), Dequeue(), Dequeue(). Which option correctly describes the dequeue results and the final queue (front to rear)?",
      options: [
        { optionId: "0", optionText: "Returned: 1, 2, 3 | Remaining: 4, 5" },
        { optionId: "1", optionText: "Returned: 1, 2, 3 | Remaining: 5, 4" },
        { optionId: "2", optionText: "Returned: 1, 2, 4 | Remaining: 3, 5" },
        { optionId: "3", optionText: "Returned: 1, 3, 2 | Remaining: 4, 5" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A queue is implemented using two stacks, s1 and s2. For dequeue, elements are transferred from s1 to s2 only when s2 is empty. What is the amortized time complexity of dequeue?",
      options: [
        { optionId: "0", optionText: "O(1) worst-case, O(n) amortized" },
        { optionId: "1", optionText: "O(n) worst-case, O(1) amortized" },
        { optionId: "2", optionText: "O(n) worst-case, O(n) amortized" },
        { optionId: "3", optionText: "O(log n) amortized" }
      ],
      correctOptionId: "1",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A queue is implemented using two stacks, s1 and s2. For dequeue, elements are transferred from s1 to s2 only when s2 is empty. What is the amortized time complexity of dequeue?",
      options: [
        { optionId: "0", optionText: "O(1) worst-case, O(n) amortized" },
        { optionId: "1", optionText: "O(n) worst-case, O(1) amortized" },
        { optionId: "2", optionText: "O(n) worst-case, O(n) amortized" },
        { optionId: "3", optionText: "O(log n) amortized" }
      ],
      correctOptionId: "1",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "Consider the following stack-based logic:\n\nstack<int> s;\nint a[] = {3, 1, 4, 2};\n\nfor(int i = 0; i < 4; i++) {\n    while(!s.empty() && s.top() > a[i])\n        s.pop();\n    s.push(a[i]);\n}\n\nWhat will be the stack contents from bottom to top?",
      options: [
        { optionId: "0", optionText: "3, 1, 4, 2" },
        { optionId: "1", optionText: "1, 2" },
        { optionId: "2", optionText: "3, 4" },
        { optionId: "3", optionText: "4, 2" }
      ],
      correctOptionId: "3",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A binary tree has the following traversals:\n\nInorder: 4 2 5 1 6 3 7\nPreorder: 1 2 4 5 3 6 7\n\nWhat is the postorder traversal?",
      options: [
        { optionId: "0", optionText: "4 5 2 6 7 3 1" },
        { optionId: "1", optionText: "4 2 5 6 3 7 1" },
        { optionId: "2", optionText: "2 4 5 1 6 7 3" },
        { optionId: "3", optionText: "4 5 2 1 6 3 7" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A binary tree has 15 nodes. What is the minimum possible height of the tree, when height is measured in edges?",
      options: [
        { optionId: "0", optionText: "2" },
        { optionId: "1", optionText: "3" },
        { optionId: "2", optionText: "4" },
        { optionId: "3", optionText: "5" }
      ],
      correctOptionId: "1",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "What is the output of the following code?\n\nint height(Node* root) {\n    if(root == NULL)\n        return -1;\n\n    return 1 + max(height(root->left), height(root->right));\n}\n\nIf the tree consists of a root node with two children, what is its height?",
      options: [
        { optionId: "0", optionText: "0" },
        { optionId: "1", optionText: "1" },
        { optionId: "2", optionText: "2" },
        { optionId: "3", optionText: "3" }
      ],
      correctOptionId: "1",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "Which of the following sequences could be the preorder traversal of a Binary Search Tree?",
      options: [
        { optionId: "0", optionText: "40, 30, 35, 80, 70, 90" },
        { optionId: "1", optionText: "40, 80, 30, 20, 90, 70" },
        { optionId: "2", optionText: "40, 30, 80, 20, 70, 90" },
        { optionId: "3", optionText: "40, 50, 30, 20, 60, 70" }
      ],
      correctOptionId: "0",
      matchRound: 4
    },
    {
      year: "2nd",
      questionText: "A BST is constructed by inserting the values in this order:\n\n50, 30, 70, 20, 40, 60, 80\n\nWhat is the number of nodes visited when searching for 65?",
      options: [
        { optionId: "0", optionText: "2" },
        { optionId: "1", optionText: "3" },
        { optionId: "2", optionText: "4" },
        { optionId: "3", optionText: "5" }
      ],
      correctOptionId: "1",
      matchRound: 4
    }
  ];

  await prisma.question.createMany({
    data: secondYearQuestions,
    skipDuplicates: true
  });

  console.log(`Seeded ${secondYearQuestions.length} second year questions`);
}
