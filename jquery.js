window.onload = function(){
        // Creating the Canvas
        var canvas = document.createElement("canvas"), 
            c = canvas.getContext("2d"),
            particles = {},
            particleIndex = 0,
            particleNum = 0.55;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.id = "motion";
        document.body.appendChild(canvas)

        function Particle(){
            this.x = canvas.width/2;
            this.y = canvas.height/2;
          
            this.vx = Math.random() * 5 - 2.5;
            this.vy = Math.random() * 2 - 1;
          
            this.growth = ( Math.abs(this.vx) + Math.abs(this.vy) ) * 0.007;
          
            particleIndex++;
            particles[particleIndex] = this;
            this.id = particleIndex;
            this.size = Math.random() * 1;
            this.colors = [
              "rgba(35,11,37,"+ (Math.random() + .5) +")",
              "rgba(227,82,22,"+ (Math.random() + .5) +")",
              "rgba(237,160,77,"+ (Math.random() + .5) +")",
              "rgba(248,224,133,"+ (Math.random() + .5) +")"];
            this.color = this.colors[Math.floor(Math.random() * 3)];
        }
       
        Particle.prototype.draw = function(){
          this.x += this.vx;
          this.y += this.vy;
          
          this.size += this.growth;
          if(this.x > canvas.width || this.y > canvas.height){
            delete particles[this.id];
          }

          c.fillStyle = this.color;
          c.beginPath();
          c.arc(this.x, this.y, this.size,0*Math.PI,2*Math.PI);
          c.fill();
        };
        
        setInterval(function(){
            c.fillStyle = "#190C13";
            c.fillRect(0,0,canvas.width,canvas.height);
            /*for (var i = 0; i < particleNum; i++){
                new Particle();
            }*/
            if(Math.random() > particleNum){
              new Particle();
            }
            for(var i in particles){
                particles[i].draw();
            }
        }, 30);
    };