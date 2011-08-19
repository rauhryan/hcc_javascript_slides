!SLIDE incremental bullets

# Goals

* Learn something you didn't already know
* Have a general understanding of the different ways to call a
  javascript function
* Better understand jQuery.proxy() & Protoype's bind

!SLIDE smaller

### Some helper functions I will be using
    @@@ javascript
    function assert(truth, message){
      truth ? document.writeln("Pass: " + message) 
            : document.writeln("Fail: " + message);
    }

    function log(message){
       document.writeln(message);
    }

