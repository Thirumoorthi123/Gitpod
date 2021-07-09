import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typescript from '../../assets/images/ts.svg';
import Python from '../../assets/images/python.svg';
import Go from '../../assets/images/go.svg';
import Rust from '../../assets/images/rust.svg';
import Java from '../../assets/images/java.svg';
import Svelte from '../../assets/images/svelte.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mnsty:{
        marginTop:'10rem',
        [theme.breakpoints.down('sm')]: {
            marginTop:'5rem',
          },
    },
    htwoSty:{
        fontSize:'3.375rem',
        fontWeight:'600',
        lineHeight: '5%',
        margin: '82px',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            margin: '28px',
          },
    },
    httwoSty:{
        fontSize:'2rem',
        fontWeight:'600',
        lineHeight: '5%',
        marginTop: '65px',

        [theme.breakpoints.down('sm')]: {
            fontSize:'1.57rem',
            marginTop:'22px',
          },
    },
    gridContainer:{
        width:'100%',
        margin:0,
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
           flexDirection: 'column',
           justifyContent: 'center',
         },
      },
      crdSty:{
        
          [theme.breakpoints.up('sm')]: {
           margin:'0px 110px',
          },
          [theme.breakpoints.up('md')]: {
            margin:'0px 0px',
           },
      },
      gridoneSty:{
        maxWidth: '50%',
        flexBasis: '47%',
        [theme.breakpoints.down('sm')]: {
           maxWidth:'100%',
         },
      },
      pSty:{
        fontSize:'1.62rem',
        color:'#12100CB3',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        [theme.breakpoints.down('sm')]: {
         fontSize:'16px'
       },
      },
      extensty:{
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '27px',
        width:'48%',
        flexDirection:'column',
        marginTop:'40px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
         },
      },
      extenonesty:{
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '13px',
        width:'80%',
        flexDirection:'column',
        marginTop:'10px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
         },
      },
      btonSty:{
        textTransform:'none',
        backgroundColor:'#fc6d26',
        left: '0px',
        borderRadius: '.75rem',
        height: '52px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fc6d26',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
          width: '15rem',
       },
    },
    bttonSty:{
        textTransform:'none',
        backgroundColor:'#000',
        left: '0px',
        borderRadius: '.75rem',
        height: '52px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#000',
          color: '#000',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    btttonSty:{
        textTransform:'none',
        backgroundColor:'#2684FF',
        left: '0px',
        borderRadius: '.75rem',
        height: '52px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#2684FF',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    btoneSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
          width: '15rem',
          height: '2.7rem',
       },
    },
    bttoneSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#000',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    btttoneSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    btrustSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    javatSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    svelteSty:{
        textTransform:'none',
        backgroundColor:'#f2f2f2',
        left: '0px',
        borderRadius: '.75rem',
        height: '63px',
        borderColor: '#fff',
      '&:hover': {
          backgroundColor: '#fdd7af',
          color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        height: '2.7rem',
     },
    },
    spsty:{
        color:'#fff',
        fontWeight:'600',
        fontSize: '14px',
        marginLeft: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
    
         },
    },
    spssty:{
        color:'#000',
        fontWeight:'600',
        fontSize: '16px',
        marginLeft: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
         },
    },
    imgthreesty:{
        width:'24px',
        height:'24px',
        position: 'absolute',
        marginTop: '-12px',
        marginLeft: '-10px',
      },
      imgfoursty:{
        width:'24px',
        height:'24px',
        position: 'absolute',
        marginTop: '-12px',
        marginLeft: '-10px',
      },
    ptext:{
        fontSize:'1.5rem',
        lineHeight:'133.33%',
        color:'#12100CB3',
        margin: 0,
        padding: '57px',
        [theme.breakpoints.down('sm')]: {
            padding: '32px',
            fontSize:'1rem',

         },
    },
    spSty:{
        display:'inline-block',
        padding: '0 1rem',
        marginTop:'0.5rem',
        background:'#ffe4bc',
        borderRadius:'.75rem',
        height:'38px',
        [theme.breakpoints.down('sm')]: {
            height:'29px',
         },
    },
    hthreeSty:{
        fontSize:'2.7rem',
        fontWeight:'500',
        marginTop: '16px',
        marginBottom: '11px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.57rem',
            marginTop:'22px',
          },
    },
    poSty:{
        fontSize:'1.5rem',
        color:'#12100CB3',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        [theme.breakpoints.down('sm')]: {
         fontSize:'16px'
       },
    },
    typescriptSty:{
        display:'flex',
        gap:'15px',
        '&:hover': {
            fontWeight:'600',
        },
        [theme.breakpoints.down('sm')]: {
            gap:'0px',
         },
    },
    tsimg:{
        width:'9%',
    },
    ptsSty:{
        color:'#12100CB3',
        fontSize:'20px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'13px',
            paddingLeft:'15px',
         },
    },
    tpsty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
         },
    },
    pythonSty:{
        display:'flex',
        gap:'93px',
        '&:hover': {
            fontWeight:'600',
        },
        [theme.breakpoints.down('sm')]: {
            gap:'0px',
         },
    },
    pyImg:{
        width:'9%',
        position: 'absolute',
        left: '17px',
        marginTop: '16px',
        [theme.breakpoints.down('sm')]: {
            left: '13px',
            marginTop: '21px',
         },
    },
    pySty:{
        color:'#12100CB3',
        fontSize:'20px',
        paddingLeft:'53px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'13px',
            marginTop:'22px',
            marginLeft: '-120px',
         },
    },
    pysty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        marginLeft: '46px',
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
         },
    },
    gooSty:{
        display:'flex',
        gap:'204px',
        '&:hover': {
            fontWeight:'600',
        },
        [theme.breakpoints.down('sm')]: {
            gap:'0px',
         },
    },
    goImg:{
        width:'9%',
        position: 'absolute',
        left: '17px',
        marginTop: '16px',
        [theme.breakpoints.down('sm')]: {
            left: '10px',
            width:'12%',
            marginTop: '19px',
         },
    },
    goSty:{
        color:'#12100CB3',
        fontSize:'20px',
        paddingLeft:'45px',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'-113px',
            fontSize:'14px',
            marginTop:'19px', 
         },
    },
    gotsty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        marginLeft: '-39px',
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
         },
    },
    rustSty:{
        display:'flex',
        gap:'204px',
        '&:hover': {
            fontWeight:'600',
        },
        [theme.breakpoints.down('sm')]: {
            gap:'0px',
         },
    },
    rustImg:{
        width:'9%',
        position: 'absolute',
        left: '17px',
        marginTop: '16px',
        [theme.breakpoints.down('sm')]: {
           paddingLeft:'2px',
            marginTop: '20px',
         },
    },
    rustoSty:{
        color:'#12100CB3',
        fontSize:'20px',
        paddingLeft:'45px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
             marginTop: '19px',
             marginLeft:'-114px',
          },
    },
    rusttsty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        marginLeft: '-39px',
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
    javaSty:{
        display:'flex',
        gap:'204px',
        '&:hover': {
            fontWeight:'600',
        },
        [theme.breakpoints.down('sm')]: {
           gap:'0px',
         },
    },
    jImg:{
        width:'9%',
        position: 'absolute',
        left: '17px',
        marginTop: '16px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'3px',
             marginTop: '22px',
          },
    },
    javatoSty:{
        color:'#12100CB3',
        fontSize:'20px',
        paddingLeft:'45px',
        [theme.breakpoints.down('sm')]: {
             marginTop: '19px',
             fontSize:'14px',
             marginLeft:'-113px',

          },
    },
    javattsty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        marginLeft: '-39px',
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
    svelSty:{
        display:'flex',
        gap:'204px',
        '&:hover': {
            fontWeight:'600',
        },   
        [theme.breakpoints.down('sm')]: {
            gap:'0px',
         },
    },
    sveImg:{
        width:'6%',
        position: 'absolute',
        left: '29px',
        marginTop: '20px',
    },
    sveltoSty:{
        color:'#12100CB3',
        fontSize:'20px',
        paddingLeft:'45px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px',
            paddingLeft:'0px',
            marginLeft:'-67px',
         },
      
    },
    svelttsty:{
        display:'inline-block',
        padding: '.5rem .95rem',
        marginTop:'1.2rem',
        backgroundColor:'#12100c',
        color:'#fff',
        borderRadius:'.75rem',
        height:'21px',
        opacity:0,
        marginLeft: '-80px',
        '&:hover':{
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: {
            display:'none',
         },
    },
  }));
  export default function ContentThree() {
    const classes = useStyles();
    return(
        <div className={classes.mnsty}>
            <h2 className={classes.htwoSty}>Get started now</h2> 
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4} className={classes.gridoneSty}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                            <h4 className={classes.httwoSty}>Connect Git repository</h4> 
                            <p className={classes.pSty}>Select a Git provider to start with an <br /> existing project from any Git context.</p>
                            <div className={classes.extensty}>
                                <Button variant="outlined" className={classes.btonSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                <svg viewBox="0 0 30 28" className={classes.svgSty}   style={{position:'absolute',width:'1.75rem',height:'1.75rem',marginTop:'-12px',left:'28px'}} fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-gpn29u"><title>Bitbucket</title><path d="M14.583 27.214L9.21 10.954h10.738l-5.365 16.26z" fill="#fff"></path><path d="M27.476 10.954l1.637 4.94c.148.449-.012.944-.403 1.223L14.584 27.214l12.892-16.26z" fill="#fff" fill-opacity=".65"></path><path d="M27.476 10.954h-7.527l3.24-9.793c.165-.5.888-.5 1.06 0l3.227 9.793z" fill="#fff"></path><path d="M1.685 10.954l-1.63 4.94c-.148.449.012.944.403 1.223l14.127 10.097-12.9-16.26z" fill="#fff" fill-opacity=".65"></path><path d="M1.685 10.954H9.21L5.978 1.161c-.166-.5-.888-.5-1.06 0l-3.233 9.793z" fill="#fff"></path><path d="M14.585 27.214l-5.373-16.26H1.685l12.9 16.26z" fill="#fff" fill-opacity=".85"></path><path d="M14.584 27.214l12.892-16.26h-7.527l-5.365 16.26z" fill="#fff" fill-opacity=".85"></path></svg>
                                </a> 
                                <span className={classes.spsty}> Continue with gitlab</span>
                                </Button>
                                <Button variant="outlined" className={classes.bttonSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                <svg viewBox="0 0 29 30" style={{position:'absolute',width:'1.75rem',height:'1.75rem',marginTop:'-17px',left:'28px'}}  fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-gpn29u"><title>GitHub Octocat</title><path fill-rule="evenodd" clip-rule="evenodd" d="M14.57.5a14.374 14.374 0 00-9.442 3.54 14.947 14.947 0 00-4.94 8.946A15.133 15.133 0 002.106 23.07a14.615 14.615 0 007.862 6.406c.733.137.992-.329.992-.721v-2.528c-4.065.903-4.923-1.999-4.923-1.999a3.97 3.97 0 00-1.617-2.181c-1.314-.913.107-.913.107-.913.46.067.9.24 1.285.505.386.265.707.617.94 1.029.197.366.464.688.784.949a3.047 3.047 0 003.45.292c.057-.751.374-1.457.894-1.99-3.234-.374-6.63-1.652-6.63-7.3a5.82 5.82 0 011.493-3.989 5.529 5.529 0 01.143-3.933s1.224-.402 4.002 1.524a13.49 13.49 0 017.291 0c2.779-1.926 3.994-1.524 3.994-1.524.536 1.233.6 2.627.179 3.906a5.82 5.82 0 011.492 3.988c0 5.713-3.404 6.963-6.648 7.3.348.358.617.787.788 1.26.17.472.24.976.204 1.479v4.079c0 .484.26.858 1 .712a14.623 14.623 0 007.752-6.43 15.134 15.134 0 001.87-10.019 14.949 14.949 0 00-4.89-8.892A14.377 14.377 0 0014.57.5z" fill="#F9F9F9"></path></svg>
                                </a> 
                                <span className={classes.spsty}> Continue with github</span>
                                </Button>
                                <Button variant="outlined" className={classes.btttonSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                <svg viewBox="0 0 27 24" style={{position:'absolute',width:'1.75rem',height:'1.75rem',marginTop:'-12px',left:'28px'}} fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-gpn29u"><title>Bitbucket</title><path d="M.848.25h-.01a.841.841 0 00-.827.971L3.565 22.8c.091.543.563.945 1.114.95h17.053a.84.84 0 00.837-.703l3.554-21.822a.841.841 0 00-.826-.971h-.011L.848.25zm14.968 15.595h-5.443L8.899 8.146h8.236l-1.32 7.7z" fill="#fff"></path></svg>
                                </a> 
                                <span className={classes.spsty}> Continue with bitbucket</span>
                                </Button>
                            </div>
                            <p className={classes.ptext}>Or prefix any GitLab, GitHub or Bitbucket URL with
                                <br /> <span className={classes.spSty}>gitpod.io/#</span></p>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gridoneSty}>
                <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                            <h3 className={classes.hthreeSty}>Launch an example workspace</h3> 
                            <p className={classes.poSty}>Dive into one of our example workspaces.</p>
                            <div className={classes.extenonesty}>
                                <Button variant="outlined" className={classes.btoneSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.typescriptSty}>
                                    <img src={Typescript} alt="Typescript" className={classes.tsimg}/>
                                    <p className={classes.ptsSty} >Node or TypeScript</p>
                                    <span className={classes.tpsty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>
                                <Button variant="outlined" className={classes.bttoneSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.pythonSty}>
                                        <img src={Python} alt="Python" className={classes.pyImg}/>
                                        <p className={classes.pySty} >Python</p>
                                        <span className={classes.pysty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>
                                <Button variant="outlined" className={classes.btttoneSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.gooSty}>
                                        <img src={Go} alt="go logo" className={classes.goImg}/>
                                        <p className={classes.goSty} >Go</p>
                                        <span className={classes.gotsty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>    
                                <Button variant="outlined" className={classes.btrustSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.rustSty}>
                                        <img src={Rust} alt="Rust logo" className={classes.rustImg}/>
                                        <p className={classes.rustoSty} >Rust</p>
                                        <span className={classes.rusttsty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>  
                                <Button variant="outlined" className={classes.javatSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.javaSty}>
                                        <img src={Java} alt="Java logo" className={classes.jImg}/>
                                        <p className={classes.javatoSty} >Java</p>
                                        <span className={classes.javattsty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>  
                                <Button variant="outlined" className={classes.svelteSty}>
                                <a href="https://gitpod.io/login" style={{textDecoration:'none'}}>
                                    <div className={classes.svelSty}>
                                        <img src={Svelte} alt="Svelte logo" className={classes.sveImg}/>
                                        <p className={classes.sveltoSty} >Svelte</p>
                                        <span className={classes.svelttsty}>Launch Workplace</span>
                                    </div>
                                </a> 
                                </Button>                            
                            </div>
                        </CardContent>
                    </Card> 
                
                </Grid>
            </Grid>    
      
        </div>    

    )}