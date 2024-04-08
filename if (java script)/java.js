// here print masseg for admin used (if)
let roel = prompt ("what is your roel");
if (roel =='admin')
{
    document.write('update,create , delete' )
    // here used else becouse you want add more role for if
}
else if (roel == 'moderator')
{
    document.write('create, update')
// if you not admin & moderator
}
else {
    document.write('hello user how are you today you cant used this website')
}