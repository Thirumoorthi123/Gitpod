import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Ben from '../../assets/images/ben.jpg';
import Mic from '../../assets/images/michael.jpg';
import Jul from '../../assets/images/julius.jpg';
import Dav from '../../assets/images/david.jpg';
import Bwp from '../../assets/images/bwplotka.jpg';
import Mru from '../../assets/images/mrugesh.jpg';
import Sve from '../../assets/images/sven.jpg';
import Jon from '../../assets/images/jonathan.jpg';
import Ale from '../../assets/images/alejandro.jpeg';
import Rom from '../../assets/images/roman.jpg';
import Hug from '../../assets/images/hugh.jpg';
import Mar from '../../assets/images/marcel.jpg';
import Bre from '../../assets/images/brendan.jpg';
import Joon from '../../assets/images/joonas.png';
import Yog from '../../assets/images/yogi.jpg';
import Kev from '../../assets/images/kevin.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 275,
    },
    mnsty:{
        marginTop:'10rem',
        padding:'0px 75px',
        [theme.breakpoints.down('sm')]: {
          marginTop:'5rem',
          padding:'0px 0px',
        },
    },
    htwoSty:{
        fontSize:'3.375rem',
        [theme.breakpoints.down('sm')]: {
          fontSize:'2.5rem',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      gridContainer:{
        width:'100%',
        margin:0,
        padding:'30px',
        display:'flex',
        overflowX:'auto',
        flexWrap:'nowrap',
        gap:'51px',
        scrollSnapType: 'x mandatory',

        '&::-webkit-scrollbar': {
          width: '1px',
          height:'7px',
          padding:'0px 20px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#fff',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#999',
          borderRadius: '5px',
        },
        [theme.breakpoints.down('sm')]: {
          padding:'0px',
        },
      },
      gdItem:{
        flex:'0 0 auto',
        padding:'12px 30px',
        scrollSnapAlign: 'start',
      },
      crdhSty:{
        flex: 0,
        textAlign:'initial',
      },
      pSty:{
        fontSize:'1.12rem',
        color:'#12100c',
        textAlign: 'initial',
        fontFamily: 'sans-serif',
        lineHeight:'25px',
        [theme.breakpoints.down('sm')]: {
         fontSize:'12px'
       },
      },
      poneSty:{
        fontSize:'1.12rem',
        color:'#12100c',
        textAlign: 'initial',
        marginTop:'0.5rem', 
        fontFamily: 'sans-serif',
        lineHeight: '25px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px'
        },
      },
      avaimg:{
        width:'100%',
      },
      avatar:{
        width:'54px',
        height:'54px',
      },
      paaraSty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-79px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-34px',
                },
      },
       paara1Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-40px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-8px',
                },
      },
        paara2Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-41px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-8px',
                },
      },
       paara3Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-18px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-8px',
                },
      },
      paara4Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'14px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'24px',
                },
      },
      paara5Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'9px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'24px',
                },
      },
       paara6Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-45px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-15px',
                },
      },
       paara7Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-39px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'24px',
                },
      },
       paara8Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'-145px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'-92px',
                },
      },
        paara9Sty:{
        marginTop: '-62px',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft:'2px',
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          marginLeft:'24px',
                },
      },
      paaraoSty:{
        position: 'relative',
        marginTop: '-8px',
        left: '76px',
        textAlign:'initial',
        fontFamily: 'ABCDiatype, sans-serif',
        fontSize: '14px',
        lineHeight:'24px',
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
          fontSize:'12px',
          left:'76px',
        },

      },
      crdSty:{
        [theme.breakpoints.down('sm')]: {
            width:'100%',
         },
      },
  }));
  export default function ContentTwo() {
    const classes = useStyles();

    return(
        <div className={classes.mnsty}>
            <h2 className={classes.htwoSty}>Used by 350,000+ developers</h2> 
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>GitPod is incredibly cool.</p>
                        <p className={classes.poneSty}>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Ben} alt="benimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>Ben Halpern</p>
                            <p className={classes.paaraoSty}>Creator and Co-founder <b>@forem</b> and <b>@ThePracticalDev</b> 
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.</p>
                        <p className={classes.poneSty}>Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Mic} alt="micimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara1Sty}>Michael Friedrich</p>
                            <p className={classes.paaraoSty}>Developer Evangelist <b>@GitLab</b></p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px',height:'80%'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}> Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Jul} alt="Julimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>Julius Volz</p>
                            <p className={classes.paaraoSty}>Creator <b>@PrometheusIO</b></p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px',height:'76%'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                          I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week
                          just from stumbling across Github repos that interest me and appending
                          “http://gitpod.io/#” to the URL. A+ tool all around.
                        </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Dav} alt="Davimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>David Ressler</p>
                            <p className={classes.paaraoSty}>Engineering Manager<b>@instagram</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}> This @gitpod thing is magic! Pretty cool, without any extra configuration. Good work!</p>
                        <p className={classes.poneSty}>https://gitpod.io/#https://github.com/thanos-io/thanos</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Bwp} alt="Bwpimg" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara2Sty}>Bartłomiej Płotka</p>
                            <p className={classes.paaraoSty}>Principal Software Engineer<b>@RedHat</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                          Ya'all @gitpod is freaking amazing! We integrated it into our workflow for working on @freeCodeCamp's codebase and I am honestly loving it. 🔥🔥!
                        </p>
                        <p className={classes.poneSty}>Go check it out on our repo https://github.com/freeCodeCamp/f... now!</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Mru} alt="Mruimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara3Sty}>Mrugesh Mohapatra</p>
                            <p className={classes.paaraoSty}>Technology & Community <span><b>@forem</b>  </span> 
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>Huge time saver, less frustrations for devs: Automated ready-to-code dev environments with pre-build workspaces. #gitpod #cloudide.</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Sve} alt="sveimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>Sven Peters</p>
                            <p className={classes.paaraoSty}>Dev Advocate <b>@MongoDB</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}> I'm really enjoying @gitpod - for me, it's made full-stack development in the browser (yes,including mobile) a reality </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Jon} alt="jonimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara4Sty}>Jonathan Lister Parsons</p>
                            <p className={classes.paaraoSty}>CTO <b>@PensionBee</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                          My setup is on @gitpod, just like Christopher McCandless, where I go my code goes with me,
                          no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild.
                        </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Ale} alt="aleimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>Alejandro</p>
                            <p className={classes.paaraoSty}>Co-Founder<b>@4GeeksAcademy</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>
                                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>Have to say that @gitpod is just super nice to use. Very impressed by the performance!</p>                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Rom} alt="rokimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>ROKU</p>
                            <p className={classes.paaraoSty}>Engineering Manager<b>@GitLab</b></p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid> 
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                            I've been playing around with the "next generation" of Cloud IDEs
                            lately, and @gitpodio is quickly emerging as one of the best 👨‍💻 
                            <br/>
                             Awesome @github integration, slick Chrome extension, and super fast 🚀 https://gitpod.io/index.html
                        </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Hug} alt="hugimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paaraSty}>Hugh Durkin</p>
                            <p className={classes.paaraoSty}>Platform Ecosystem<b>@HubSpot</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                            Can only agree, opening a GitLab repository in gitpod is a magical
                            experience, thanks for the integration @gitpod!
                        </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Mar} alt="marimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara5Sty}>Marcel van Remmerden</p>
                            <p className={classes.paaraoSty}>Product Design Manager<b>@GitLab</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>
                          I just discovered the @gitlab @gitpod integration is alive on http://GitLab.com (released in 13.4 behind a feature flag). And it's AMAZING https://docs.gitlab.com/ee/integration.....
                        </p>
                        <p className={classes.poneSty}>Now I can code from *anywhere*</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Bre} alt="breeimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara6Sty}>Brendan O’Leary</p>
                            <p className={classes.paaraoSty}>Dev.Evangelist<b>@GitLab</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}> Wow - @gitpod is a brilliant way of evaluating a framework without installing anything.</p>
                        <p className={classes.poneSty}>
                            Launch gitpod for @vaadin at https://vaadin.com/start/v14 ("Online workspace" tab). You'll have app running and will be editing code in 3min from clicking "Launch" button.
                        </p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Joon} alt="jonimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara6Sty}>Joonas Lehtinen</p>
                            <p className={classes.paaraoSty}>Co-founder<b>@vaadin</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}> Now contributing to @gitlab is a cakewalk with @gitpod 🎉!</p>
                        <p className={classes.poneSty}>Already started my game! #100DaysOfCode</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Yog} alt="yogimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara8Sty}>Yo</p>
                            <p className={classes.paaraoSty}>Creator<b>@Taskord</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>  
                <Grid item xs={12} sm={6} md={4} className={classes.gdItem}>
                    <Card style={{borderRadius:'12px'}} className={classes.crdSty}>
                        <CardContent>
                        <p className={classes.pSty}>Today is a great day, we added the @gitpod support to the @golo_lang repository. So now you can start hacking @golo_lang in almost only one click. Enjoy 🎉</p>
                        <p className={classes.poneSty}>gitpod.io/#https://githu...</p>
                        <CardHeader className={classes.crdhSty}
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={Kev} alt="kevimage" className={classes.avaimg}/>
                            </Avatar>
                            }
                        />
                        <subheaderTypographyProps>
                            <p className={classes.paara9Sty}>Senior Enterprise Geek </p>
                            <p className={classes.paaraoSty}>Senior Technical Account Manager<br/><b>@GitLab</b>
                            </p>
                        </subheaderTypographyProps>
                        </CardContent>
                    </Card> 
                </Grid>               
            </Grid>    
        </div>
    )}