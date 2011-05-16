script =
    [
        [
            "Hello world",
            "This is another line"
        ],
        [
            "We're starting a new^^^old story",
            "What do you want to talk about?"
        ]
    ].reverse()
txt = $ 'textarea'
act = script.pop()
line = act.reverse().pop().split ''
char = 0;
type = () ->
    if char >= line.length
        return
    
    c = line[char]
    
    if c == '^'
        txt.val txt.val().substring(0, txt.val().length - 1)
    else
        txt.val txt.val() + c if char < line.length
    
    char++
showNext = () ->
    txt.val txt.val() + '\r\n' if act && act.length
    if act.length == 0
        act = script.pop()
        if !act
            showNext = () -> 
                return
            return
        txt.val ''
    line = act.reverse().pop().split ''
    char = 0

$ ->
    txt.keypress (e) -> 
        e.preventDefault

        switch e.keyCode
            when 13 
                showNext()
            else
                type()
        return false
        
    $(window).resize -> 
        w = $ this
        txt.height w.height() - 35
        txt.width w.width() - 15
        
    $(window).resize()