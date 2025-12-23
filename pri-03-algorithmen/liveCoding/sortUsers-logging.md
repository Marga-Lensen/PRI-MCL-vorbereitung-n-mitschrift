Change the `map()` callback to return an object with both `name` and `role`:

```typescript
console.log("2 admins first:", usersWithTwoAdmins.map(user => 
    `${user.name} (${user.role})`
));
```

**Output**: `['YoungAdmin (admin)', 'Mohammad (admin)', 'John (user)', 'OldUser (user)']`[1]

## Cleaner Alternatives for Classroom

**1. Object shorthand (most readable):**
```typescript
console.log("2 admins first:", usersWithTwoAdmins.map(user => ({
    name: user.name,
    role: user.role
})));
```
**Output:**
```
[
  { name: 'YoungAdmin', role: 'admin' },
  { name: 'Mohammad', role: 'admin' },
  { name: 'John', role: 'user' },
  { name: 'OldUser', role: 'user' }
]
```

**2. Template literal (compact, shows priority clearly):**
```typescript
console.log("2 admins first:", usersWithTwoAdmins.map(user => 
    `${user.role === 'admin' ? '👑' : ''}${user.name}`
));
```
**Output**: `['👑YoungAdmin', '👑Mohammad', 'John', 'OldUser']`

**3. One-liner with destructuring (advanced):**
```typescript
console.log("2 admins first:", usersWithTwoAdmins.map(({name, role}) => 
    `${name} [${role}]`
));
```

**Recommendation for live coding**: Use **object shorthand**—clear, shows structure, easy to extend to `age` later.

[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)