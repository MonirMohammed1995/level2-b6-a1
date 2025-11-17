Blog Post

1. Q: What are some differences between interfaces and types in TypeScript?
A: একই কাজ অনেক সময় দুইটাই করতে পারে, কিন্তু interface বেশি “object-focused”, আর type বেশি “flexible”.
(a) Interface সাধারণত object-এর structure বর্ণনা করতে ব্যবহৃত হয়। আবার extend বা merge করা যায়
(b) Type একবার declare করলে পরে একই নামে আবার যোগ করা যায় না। Type শুধু object নয়—union, tuple, primitive—সবকিছু define করতে পারে।

3. Q: Explain the difference between any, unknown, and never types in TypeScript.
A: any = allowed যেকোনো টাইপ রাখা যায়, TypeScript কোনো চেক করবে না। (unsafe)
unknown = সবকিছু রাখা যায়, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে। (safer)
never = যে জিনিস কখনো ঘটে না—যেমন: error throw করে এমন ফাংশন বা infinite loop। return-ই নেই
