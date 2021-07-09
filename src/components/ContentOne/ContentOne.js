import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Code from '../../assets/images/code.png'
import Gitedit from '../../assets/images/giteditor.jpg';
import Chrome from '../../assets/images/chrome.svg';
import Firefox from '../../assets/images/firefox.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    textAlign: 'center',
    borderRadius: '8px',
    width: '63%',
    height:'39px',
    marginLeft: '67px',
    color: theme.palette.text.secondary,
  },
  ctSty:{
    backgroundColor: '#f4f5f5',
  },
  boxsty:{
    justifyContent: 'space-between',
    padding: '36px 64px',
    marginTop: '18%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px',
  },
  },

  imgsty:{
    width: '502px',
    height: '402px',
    [theme.breakpoints.down('sm')]: {
    width:'304px',
    height:'380px',
    marginTop: '20px',
  },
  },
  honeSty:{
    fontSize: '2rem',
    lineHeight: '125%',
    color: '#12100c',
    display: 'flex',
    textAlign: 'initial',
      [theme.breakpoints.up('xs')]: {
        fontSize:'1.12rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
        fontWeight: '500',
        margin: 0,
        lineHeight: '110%',
      },
      [theme.breakpoints.up('md')]: {
        fontSize:'3rem',
      },
  },
  paraSty:{
    fontSize: '1.6rem',
    textAlign: 'initial',
    lineHeight: '133.33%',
    color: '#12100CB3',
    fontFamily: 'sans-serif',

      [theme.breakpoints.up('xs')]: {
        fontSize: '1rem',
        marginTop: '30px',
        padding:'0px 12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.2rem',
      },
  },
  papSty:{
    backgroundColor:'#f4f5f5',
    boxShadow: '0px 0px 0px 0px',
  },
  grdSty:{
    textAlign: 'initial',
    width: '100%',
    gap: '210px',
    paddingTop: '18px',
    [theme.breakpoints.down('sm')]: {
        margin:0,
        paddingTop: '17px',
        gap:'174px',
    },
    [theme.breakpoints.up('md')]: {
      gap:'159px',
    },

  },
  grdmSty:{
    maxWidth: '0%',
    flexBasis:'0%',
    // padding: '0px 0px 0px 17px',
    [theme.breakpoints.down('sm')]: {
        padding: '0px !important',

    },
  },
  grdmoSty:{
    maxWidth: '0%',
    flexBasis:'0%',
    // padding: '0px 0px 0px 17px',
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
    borderRadius: 12,
    border: 0,
    color: '#12100C',
    height: 36,
    padding: '0 30px',
    backgroundColor: '#ffae33',
    position: 'relative',
    left: '15%',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    width: '183px',
    fontSize: '13px',

    '&:hover': {
        backgroundColor: '#ffbe5c',
        color: '#12100C',
    },
    [theme.breakpoints.up('xs')]: {
      width:'170px',    
      fontSize: '12px',
      textAlign: 'center',
      minHeight:'33px',
    },
    [theme.breakpoints.up('sm')]: {
      width:'169px',    
      fontSize: '11px',
      textAlign: 'center',
      height:'34px',
    },
  },
  btnoSty:{
    borderRadius: 12,
    border: 0,
    color: '#12100C',
    height: 36,
    padding: '0 30px',
    backgroundColor: '#ffb0ae',
    position: 'relative',
    left: '15%',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    width: '183px',
    fontSize: '13px',

    '&:hover': {
        backgroundColor: '#ffb6c1',
        color: '#12100C',
    },
    [theme.breakpoints.up('xs')]: {
      width:'132px',    
      fontSize: '13px',
      textAlign: 'center',
      minHeight:'36px',
    },
    [theme.breakpoints.up('sm')]: {
      width:'169px',    
      fontSize: '11px',
      textAlign: 'center',
      height:'34px',
      left:'34px',
    },
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
  gitsty:{
      marginTop:'10rem',
      [theme.breakpoints.down('sm')]: {
        marginTop:'7rem',
     },
  },
  htwoSty:{
    fontSize:'3.375rem',
    [theme.breakpoints.down('sm')]: {
        fontSize:'2.5rem',
     },
  },
  imgonesty:{
    borderRadius: '1.875rem',
    [theme.breakpoints.down('sm')]: {
       width:'100%',
       marginTop:'23px',
    },
  },
  imgtwoSty:{
    width:'1200px',
    height:'819px',
    borderRadius: '.875rem',
    boxShadow: '0px 0px 19px 8px #ffbe5c',
    [theme.breakpoints.down('sm')]: {
        width:'100%',
        height:'60%',
        boxShadow: '0px 11px 15px 0px #ffbe5c',
     },
  },
  paraasty:{
    fontSize: '1.5rem',
    lineHeight: '34px',
    paddingLeft: '200px',
    paddingRight: '228px',
    marginTop: '37px',
    color:'#12100CB3',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: '27px',
        padding:'8px',
        marginTop: '10px',
     },
  },
  extensty:{
    display: 'flex',
    justifyContent: 'center',
    gap: '27px',
     [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
        alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  grddSty:{
    width:'100%',
    justifyContent: 'center',
    margin:0,
  },
  imgthreesty:{
    width:'24px',
    height:'24px',
    position: 'absolute',
    marginTop: '-12px',
    marginLeft: '-10px',
  },

  btonSty:{
      textTransform:'none',
      backgroundColor: '#fff',
    width: '17%',
    left: '0px',
    borderRadius: '.5rem',
    height: '44px',
    borderColor: '#fff',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
    },
    [theme.breakpoints.down('sm')]: {
        width: '12rem',
     },
  },
  spsty:{
    color:'#000',
    fontWeight:'600',
    fontSize: '16px',
    marginLeft: '25px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',

     },
},
  btonnSty:{
    textTransform:'none',
    backgroundColor: '#fff',
  width: '17%',
  left: '0px',
  borderRadius: '.5rem',
  height: '44px',
  borderColor: '#fff',
  '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
  },
  [theme.breakpoints.down('sm')]: {
    width: '12rem',
 },
},
imgfoursty:{
    width:'24px',
    height:'24px',
    position: 'absolute',
    marginTop: '-12px',
    marginLeft: '-10px',
  },
  spssty:{
    color:'#000',
    fontWeight:'600',
    fontSize: '16px',
    marginLeft: '25px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
     },
},
}));

export default function ContentOne() {
  const classes = useStyles();
  return(
    <div className={classes.ctSty}>
            <Box display="flex" p={1}  className={classes.boxsty}>
        <Box p={1} order={0}>
            <h2 className={classes.honeSty}>
            Think CI/CD for dev environments
            </h2>
            <p className={classes.paraSty}>
            <p>We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>
            </p>
            <Grid container spacing={0} className={classes.grdSty} >
                <Grid item xs={0} order={0} className={classes.grdmSty}>
                <Paper  className={classes.papSty}>
                <Button className={classes.btnSty} variant="contained" color="#000" href=" "> More on prebuilds</Button>
                </Paper>
                </Grid>
                <Grid item xs={0} order={0} className={classes.grdmoSty}>
                <Paper  className={classes.papoSty}>
                <Button className={classes.btnoSty} variant="contained" color="#000" href=" "> Documentation</Button>
                </Paper>
                </Grid>
            </Grid>
        </Box>
        <Box p={1} order={0} >
        <img src={Code} alt="rimage" className={classes.imgonesty} />
        </Box>
      </Box>
      <div className={classes.gitsty}>
          <h2 className={classes.htwoSty}>Remote-first. Secure by design.</h2>
          <div style={{padding:'10px'}}>
            <img src={Gitedit} alt="gitpod editor" className={classes.imgtwoSty} />
          </div>
          <p className={classes.paraasty} >You no longer need an over-powered laptop to code, Gitpod works just as
        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
        centralizes all source code and never stores it on insecure machines and
        networks.</p>
        <div className={classes.extensty}>
          <Button variant="outlined" className={classes.btonSty}>
          <a href="https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki" style={{textDecoration:'none'}}>
                <img src={Chrome} alt="chrome" className={classes.imgthreesty} />
          </a> 
          <span className={classes.spsty}> Chrome Extension</span>
          </Button>
          <Button variant="outlined" className={classes.btonnSty}>
          <a href="https://addons.mozilla.org/firefox/addon/gitpod/" style={{textDecoration:'none'}}>
                <img src={Firefox} alt="chrome" className={classes.imgfoursty} />
          </a> 
          <span className={classes.spssty}> Firefox Extension</span> 
          </Button>
        </div>
      </div>   
    </div>
  )
}