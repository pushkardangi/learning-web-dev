// * 
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i < 6; i++)
{
  for(let j = 0; j < i; j++)
  {
    process.stdout.write("* ");
  }
  console.log();
}
console.log();

for (let i = 1; i < 6; i++)
{
  console.log("* ".repeat(i));
}