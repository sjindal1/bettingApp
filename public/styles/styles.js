import reactCSS from 'reactcss'
const flexContentCentered = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
}
const styles = reactCSS({
    'default' : {
        matchDate : {
            paddingBottom : '10px',
        },
        matchContainer : {
            border : '1px solid #e4e4e2',
            borderRadius : '5px',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        },
        matchResults : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        },
        matchTeams : {
            paddingBottom : '10px'
        },
        matchBet : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        },
        timeInfo : {
            color : '#1a398a',
            fontSize : '12px',
            padding : '10px 0px 10px 0px',
            textAlign : 'center'
        },
        matchTeamInfo : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        }
    }
})

export default styles;