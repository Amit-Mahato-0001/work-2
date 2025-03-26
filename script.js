var arr = [
    {team : 'csk',
        primary : 'yellow',
        secondary : 'green',
        image : 'https://wallpapercave.com/wp/wp3156840.jpg'
    },
    {team : 'rcb',
        primary : 'red',
        secondary : 'black',
        image : 'https://th.bing.com/th/id/R.58de30fe54442f85a1c8ac21a6040bb5?rik=mJsGNmxr0dGQMQ&riu=http%3a%2f%2fwww.bestworldevents.com%2fwp-content%2fuploads%2f2019%2f03%2fRCB-Logo-Images.jpg&ehk=cnusdEnR91ykYDpYey%2bzQJOcpxg29ZwnodMsmPuiBpg%3d&risl=&pid=ImgRaw&r=0'
    },
    {team : 'mi',
        primary : 'blue',
        secondary : 'gold',
        image : 'https://www.bing.com/images/search?view=detailV2&ccid=kLn8xXt6&id=77B9E74CE7BBFE5926B4E860CC3AD8EC258FAF35&thid=OIP.kLn8xXt6ry6btvSs346atQHaEC&mediaurl=https%3a%2f%2fwww.betrallyindia.com%2fwp-content%2fuploads%2f2021%2f03%2fmumbai-indians-logo.png&exph=397&expw=727&q=MI+Cricket+Logo&simid=607988682319075328&FORM=IRPRST&ck=C0272C380A6BC977B4222F5FD8F47206&selectedIndex=15&itb=0'
    },
    {team : 'kkr',
        primary : 'purple',
        secondary : 'gold',
        image : 'https://logodix.com/logo/1747909.jpg'
    },
    {team : 'srh',
        primary : 'orange',
        secondary : 'black',
        image : 'https://www.bing.com/images/search?view=detailV2&ccid=wMRcAXTk&id=820FFEEB550A76AA49DD2F99EBAA3D4FCB4A5CCA&thid=OIP.wMRcAXTkgUGQD1MIbEGn9wHaFj&mediaurl=https%3a%2f%2fe0.pxfuel.com%2fwallpapers%2f817%2f687%2fdesktop-wallpaper-srh-ipl-indian-cricket-team-logo.jpg&exph=638&expw=850&q=srh+Cricket+Logo&simid=608054704594298015&FORM=IRPRST&ck=87E84B86B00DCB151480AC246833C6AE&selectedIndex=0&itb=0'
    }
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
   var element = Math.floor(Math.random()*arr.length)
   var winner = arr[element]
   h1.innerHTML = winner.team
   h1.style.backgroundImage = `url(${winner.image})`
   h1.style.color = winner.primary
})

