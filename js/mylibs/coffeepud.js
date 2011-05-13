script = 
    act: 0
    line: 0
    acts: [
        [
            "Hello world",
            "This is another line"
        ],
        [
            "We're starting a new story",
            "What do you want to talk about?"
        ]
    ]
txt = $ 'textarea'
running = false
showScriptStep = () ->
    return if script.act >= script.acts.length
        
    txt.val '' if script.line == 0
    
    act = script.acts[script.act]
    line = act[script.line].split ''
    line.reverse()
    running = true
    setTimeout go = () ->
        l = line.pop()
        if !l
            running = false
            l = '\r\n'
        
        txt.val txt.val() + l
        
        if running
            setTimeout -> 
                go()
            , 50
    , 50
    
    script.line++
    if script.line >= act.length
        script.act++
        script.line = 0

$ ->
    txt.keypress (e) -> 
        e.preventDefault

        switch e.keyCode
            when 13 
                showScriptStep() if !running
            else
        return false
    $(window).resize -> 
        w = $ this
        txt.height w.height() - 35
        txt.width w.width() - 15
        
    $(window).resize()