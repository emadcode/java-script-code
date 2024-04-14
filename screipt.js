
//if you want print all names not not numbers used continue
let users =['ali ','omda','ahmed',1,2,3,4,5];
for (let i = 0; i < users.length;i++)
{
    if (typeof users [i] == 'number')
    {
    continue;
    }
console.log(users[i])
}

// if you want print one name only used break 
let names =['ali ','omda','ahmed',1,2,3,4,5];
for (let i = 0; i < names.length;i++)
{
console.log(names[i])
    if (users  [i] == 'omda')
    {
    break;
    }
}