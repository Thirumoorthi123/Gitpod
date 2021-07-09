import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Rimage from '../../assets/images/rightimage.jpg';
import Button from '@material-ui/core/Button';
import gitlogo from '../../assets/images/gitlab.svg';
import github from '../../assets/images/github.svg';
import bitbucket from '../../assets/images/bitbucket.svg'
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  divSty:{
    backgroundColor: '#f4f5f5',
  },
  boxsty:{
    justifyContent: 'space-between',
    padding: '36px 64px',

    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      padding: '0px 9px',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: '0px 9px',
},
[theme.breakpoints.up('md')]: {
  padding: '0px 49px',
},
  },
  imgsty:{
    width: '612px',
    height: '658px',
    [theme.breakpoints.up('xs')]: {
    width:'100%',
    height:'100%',
  },
  [theme.breakpoints.up('sm')]: {
    width:'371px',
  },
  [theme.breakpoints.up('md')]: {
    width:'566px',
    marginTop:'34px',
    height:'566px',
  },
},
  honeSty:{
    fontSize: '5rem',
    lineHeight: '114%',
    color: '#12100c',
    display: 'flex',
    textAlign: 'initial',
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        fontWeight: '500',
        margin: 0,
        lineHeight: '110%',
      },
  },
  paraSty:{
    fontSize: '1.6rem',
    textAlign: 'initial',
    lineHeight: '133.33%',
    color: '#12100CB3',
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        marginTop: '30px',
      },
  },
  papSty:{
    backgroundColor:'#f4f5f5',
    boxShadow: '0px 0px 0px 0px',
  },
  grdSty:{
    textAlign: 'initial',
    width: '100%',
    gap: '130px',
    [theme.breakpoints.down('sm')]: {
        margin:0,
        paddingTop: '17px',
    },

  },
  grdmSty:{
    maxWidth: '0%',
    flexBasis:'0%',
    padding: '0px 0px 0px 17px',
    [theme.breakpoints.down('sm')]: {
        padding: '0px !important',

    },
  },
  parSty:{
    color:'#12100CB3',
    margin: 0,
    paddingLeft: '60px',
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
        padding: 0,
        fontSize: '13px',
        lineHeight: '22px',
    },
  },
  btnSty:{
    borderRadius: 17,
    border: 0,
    color: '#12100C',
    height: 53,
    padding: '0 30px',
    backgroundColor: '#ffae33',
    position: 'relative',
    left: '15%',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    width: '154px',
    fontSize: '18px',
    '&:hover': {
        backgroundColor: '#ffbe5c',
        color: '#12100C',
    },
    [theme.breakpoints.down('sm')]: {
        width:'87px',    
        fontSize: '15px',
        textAlign: 'center',
        height:'68px',
        position:'inherit',
    },
    [theme.breakpoints.up('375px')]: {
      width:'50px',    
      fontSize: '12px',
      textAlign: 'center',
      height:'68px',
  }
  },
  breSty:{
    color:'red',
  },
  grdoneSty:{
    marginTop: '20px',
    paddingLeft: '26px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
  },
  },
  imgSty:{
    width: '30px',
    height: '30px',
  },
  grd0nemSty:{
    display: 'flex',
    gap: '18px',
  },
  ratingSty:
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft:'45px',
      marginTop: '-9px',
        '& > *': {
        margin: theme.spacing(1),
      },
      [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        padding: '0px 0px 0px 156px',
        marginTop: '-7px',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        padding: '0px 0px 0px 156px',
        marginTop: '-7px',
      },
  },
  btnnSty:{
    height: '34px',
padding: '3px 10px',
fontSize: '13px',
lineHeight: '28px',
color: '#24292e',
backgroundColor: '#eff3f6',
border: '1px solid #cfd3d6',
  },
  btnonSty:{
    height: '34px',
    padding: '3px 10px',
    fontSize: '13px',
    lineHeight: '28px',
    color: '#24292e',
    backgroundColor: '#eff3f6',
    border: '1px solid #cfd3d6',
  },
  btnoneSty:{
    backgroundColor: '#eff3f6',
    color: '#24292e',
  },
  btntwoSty:{
    backgroundColor: '#fff',
    color: '#24292e',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#1E90FF',
  },
  },
  spSty:{
    color:'24292e',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#1E90FF',
  },
  },
  txtsty:{
    width:'100%',
    marginTop: '68px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '29px',
    },
  },
  hsty:{
    fontSize:'3.375rem',
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      fontSize:'1.6rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'3.5rem',
    },
  },
  honesty:{
    fontSize:'3.375rem',
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      fontSize:'1.6rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'3.5rem',
    },
  },
  psty:{    
    fontColor:'#000',
    margin:0,
    [theme.breakpoints.up('xs')]: {
      fontSize:'1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'32px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'4rem',
    },
  },
  // "@keyframes dsty": {
  //   fontSize:'3.6rem',
  //   "0%": {
  //     width: 0,
  //   },
  //   "100%": {
  //     width:'100%',
  //   },
  //   " &::after": {
  //     content: ' ',
  //     position: 'absolute',
  //     top: '50',
  //     left: 0,
  //     width: '100%',
  //     height: '1px',
  //     background: 'black',
  //     transition: 'transform .4s cubic-bezier(.55,0,.1,1)',
    
  //   },
  // },
  
  // "@keyframes bsty ":{
  //   from :{ 
  //     textDecorationColor: 'transparent',
  //    },
  //   to: { textDecorationColor: 'auto',
  //    },
  // },
  // bsty:{
  //   textDecoration: 'line-through',
  // animation: 'strike 4s linear',
  // },
  // bsty:{
  //   fontSize:'3.6rem',
  //   transition: 'all .2s',
  //   display: 'inline-block',
  //   position: 'relative',
  //   color: '#12100c',
  //   " &::after": {
  //   content: '""',
  //   position: 'absolute',
  //   display: 'block',
  //   width: '100%',
  //   height: '3px',
  //   marginTop: '-.6em',
  //   transformOrigin: 'center left',
  //   webkitAnimation: 'dsty .6s cubic-bezier(.55,0,.1,1) .4s 1 forwards',
  //   animation: 'dsty .6s cubic-bezier(.55,0,.1,1) .4s 1 forwards',
  //   transition: 'transform .4s cubic-bezier(.55,0,.1,1)',
  //   textDecoration: 'line-through',
  //   },
  //  },
  //     [theme.breakpoints.up('xs')]: {
  //     fontSize:'1.3rem',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize:'32px',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize:'4rem',
  //   }, 
  // "@keyframes bsty" :{
  //   position: 'relative',
  //   "0%":
  //       {
  //          width : 0,
  //       },
  //   "100%" : 
  //       { 
  //         width: '100%', 
  //       },
  //       " &::after":{
  //         content: '""',
  //         position: 'absolute',
  //         top: '50%',
  //         left: 0,
  //         width: '100%',
  //         height: '1px',
  //         color: '#999',
  //         background:'#999',
  //         animationName: 'strike',
  //         animationDuration: '4s',
  //         animationTimingFunction: 'linear',
  //         animationIterationCount: 1,
  //         animationFillMode: 'forwards', 
  //       },
  //     },  
  

}));


export default function Content() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divSty}>
      <Box display="flex" p={1}  className={classes.boxsty}>
        <Box p={1} order={0}>
            <h1 className={classes.honeSty}>
                Always <br />Ready to <br />Code.
            </h1>
            <p className={classes.paraSty}>
            Spin up fresh, automated dev environments<br />
            for each task, in the cloud, in seconds.
            </p>
            <Grid container spacing={0} className={classes.grdSty} >
                <Grid item xs={0} order={0} className={classes.grdmSty}>
                <Paper  className={classes.papSty}>
                <Button className={classes.btnSty} variant="contained" color="#000" href=" "> Try Now</Button>
                </Paper>
                </Grid>
                <Grid item xs={6}className={classes.grdtSty}>
                <Paper className={classes.papSty}>
                    <p className={classes.parSty}>
                    Open a workspace.<br className={classes.breSty} />
                    Start from any Git context.
                    </p>
                </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.grdoneSty} >
                <Grid item xs={0} order={0} className={classes.grd0nemSty}>
                <img src={gitlogo} alt="rimage" className={classes.imgSty} />
                <img src={github} alt="rimage" className={classes.imgSty} />
                <img src={bitbucket} alt="rimage" className={classes.imgSty} />
                </Grid>
                <div className={classes.ratingSty}>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button className={classes.btnoneSty}>
                  <a href="https://github.com/gitpod-io/gitpod" style={{textDecoration:'none',fontSize:'14px',color:'#24292e',textTransform:'none'}}><svg viewBox="0 0 16 16" width="16" height="16" style={{verticalAlign: 'middle'}}class="octicon octicon-star" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> <span>Star</span></a>
                  </Button>
                  <Button className={classes.btntwoSty}>
                  <a href="https://github.com/gitpod-io/gitpod" style={{textDecoration:'none',fontSize:'14px',color:'#24292e',textTransform:'none'}}> <span className={classes.spSty}>4,234</span></a>
                  </Button>
               </ButtonGroup>
                </div>
            </Grid>
        </Box>
        <Box p={1} order={0} >
        <img src={Rimage} alt="rimage" className={classes.imgsty} />
        </Box>
      </Box>
      <div className={classes.txtsty}>
        <h2 className={classes.hsty}>Select project,</h2>
        {/* <p className={classes.psty}>
          <span className={classes.bsty}>
              check dependencies, checkout branch, view
          </span> 
          <span className={classes.bsty}>
              readme.txt, install tools, run build, run test,
          </span> 
        </p> */}
            <span class="strike">check dependencies, checkout branch, view</span>.<br/>
            <span class="strike"> readme.txt, install tools, run build, run test,</span>.
        <h2 className={classes.honesty}>Start coding.</h2>
      </div>
    </div> 
    </div>
  );
}