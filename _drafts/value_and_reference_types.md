- 3 values associated with a c pointer
    - the address it is stored at
    - the address it points to
    - the value in the pointed address
- what rly happens when you say "pass by ref or value" in higher level languages
- what do you mutate
- how do you copy values (ref / value)
- what is the significance of pointers in C
    - scope
    - values returned from functions
    - efficiency
    - direct mapping to ASM / hardware
        - higher lvl languages shield you from manipulating memory addresses directly
    - problems that pointers create
- explain why it is important to understand C (and thus how computer memory works) in order to understand higher lvl concepts
- https://stackoverflow.com/questions/162941/why-use-pointers

# How high level languages implement dynamic arrays
- go `append()` fv. tanulás közben gondolkodtam el, hogy magasabb szintű nyelvek hogy oldják meg
hogy amikor újra kell allokálni helyet egy tömbnek akkor az "aliasok" is up-to-date maradjanak
    - talán úgy, hogy kétszeres indirekciót használnak?
        - a változó nem a tömb helyére mutat, hanem egy "pointerre", ami függetlenül
        a tömb méretétől mindig ugyanott marad? **TODO: rajz!**
