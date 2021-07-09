import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Textless from '../../assets/images/textless.svg';
import Twitter from '../../assets/images/twitter.svg';
import Github from '../../assets/images/githubs.svg';
import Discourse from '../../assets/images/discourse.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    footerMain:{
       
        justifyContent: 'space-evenly',

    },
    fMain:{
        display: 'flex',
        justifyContent: 'center',
        gap:'128px',
        backgroundColor:'#f9f9f9',
        marginTop:'12%',
        fontSize: '14px',
        fontWeight: '500',
          [theme.breakpoints.up('xs')]: {
            display:'grid',
            gap:'8px',
            gridTemplateColumns:'1fr 1fr',
          },
          [theme.breakpoints.up('sm')]: {
            display:'flex',
            justifyContent: 'space-around',
          },
          [theme.breakpoints.up('md')]: {
            padding:'0px 133px',
          },
    },
    ulist:{
        listStyle:'none',
        textAlign:'initial',
        lineHeight:'30px',
        paddingLeft:'2px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'32px',
           },
    },
    anchSty:{
        textDecoration:'none',
        color:'#999',
        // color:'rgba(18,16,12,0.70196);',
    },
    hfSty:{
        marginLeft:'-65px',
        [theme.breakpoints.up('xs')]: {
            marginLeft:'-51px',
            fontSize:'12px',
          },
          [theme.breakpoints.up('sm')]: {
            marginLeft:'-49px',
          },
          [theme.breakpoints.up('md')]: {
            marginLeft:'-74px',
          },
    },  
    hfoSty:{
      fontSize:'12px',
        marginLeft:'-45px',
        [theme.breakpoints.up('xs')]: {
          marginLeft:'-35px',
        },
        [theme.breakpoints.up('sm')]: {
          marginLeft:'-21px',
        },
        [theme.breakpoints.up('md')]: {
          marginLeft:'-41px',
        },  
    },
    hftSty:{
        marginLeft:'6px',
        fontSize:'12px',
        [theme.breakpoints.up('xs')]: {
            marginLeft:'-33px',
           },
           [theme.breakpoints.up('sm')]: {
            marginLeft:'18px',
          },
          [theme.breakpoints.up('md')]: {
            marginLeft:'-11px',
          },
    },
    hfthSty:{
        marginLeft:'-72px',
        fontSize:'12px',  
          [theme.breakpoints.up('xs')]: {
            marginLeft:'-62px',
           },
           [theme.breakpoints.up('sm')]: {
            marginLeft:'-36px',
          },
          [theme.breakpoints.up('md')]: {
            marginLeft:'-70px',
          },
    },
    fTwo:{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '18px 3px 46px 3px',
        backgroundColor:'#f9f9f9',
        gap:'0%',
        [theme.breakpoints.down('xs')]: {
            padding: '37px 0px 46px 0px',
           },
           [theme.breakpoints.up('sm')]: {
            gap:'38%',
          },
          [theme.breakpoints.up('md')]: {
            gap:'244px',
          },
    },
    fLeft:{
        display:'flex',
        alignItems:'center',
        gap:'12px',
    },
    gLogo:{
        position: 'relative',
        top: '-1px',
        zIndex: 0,
    },
    lessSty:{
        width:'24px',
        height:'24px',
    },
    spSty:{
        color:'rgba(18,16,12,0.70196)',
        fontWeight:'400',
        fontSize:'14px',
    },
    fRight:{
        display:'flex',
        gap:'12px',
    },
  }));
  export default function Footer() {
    const classes = useStyles();
    return<>
        <div className={classes.footerMain} >
            <div className={classes.fMain}> 
                <div className={classes.footerOne}>
                    <h5 className={classes.hfSty}>Gitpod</h5>
                    <ul className={classes.ulist}>
                            <li><a className={classes.anchSty} href="www.google.com">Home</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Features</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Pricing</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Changelog</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Self-Hosted</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Gitpod vs GitHub <br />Codespaces </a></li>
                    </ul>
                </div>
                <div className={classes.footerTwo}>
                    <h5 className={classes.hfoSty}>Developer</h5>
                    <ul className={classes.ulist}>
                    <li><a className={classes.anchSty} href="www.google.com">Getting Started</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Screencasts</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Blog</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Documentation</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Report a bug</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Community</a></li>
                    </ul>
                </div>
                <div className={classes.footerThree}>
                    <h5 className={classes.hftSty}>Company</h5>
                    <ul className={classes.ulist}>
                    <li><a className={classes.anchSty} href="www.google.com">About</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Careers</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Contact</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Media Kit</a></li>                           
                    </ul>
                </div>
                <div className={classes.footerFour}>
                    <h5 className={classes.hfthSty}>Legal</h5>
                    <ul className={classes.ulist}>
                    <li><a className={classes.anchSty} href="www.google.com">Imprint</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Term of Service</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Nuxt.js</a></li>
                            <li><a className={classes.anchSty} href="www.google.com">Privacy Policy</a></li>
                    </ul>
                </div>
           </div>
           <div className={classes.fTwo}>
                <div className={classes.fLeft}>
                    <a href="www.google.com">
                        <div className={classes.gLogo}>
                        <img  src={Textless}  alt="Textless logo" className={classes.lessSty}></img>
                        </div>
                    </a>
                    <span className={classes.spSty}>Copyright © Gitpod</span>
                </div>
                <div className={classes.fRight}>
                <img  src={Twitter}  alt="Twitter logo" className={classes.lessSty}></img>
                <img  src={Github}  alt="Github logo" className={classes.lessSty}></img>
                <img  src={Discourse}  alt="Discourse logo" className={classes.lessSty}></img>

                </div>
            </div>
        </div>
    </>

}