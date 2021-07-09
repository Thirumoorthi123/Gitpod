import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gitlab from '../../assets/images/gitlab-logo.svg';
import Freecode from '../../assets/images/freecodecamp.svg';
import Dwave from '../../assets/images/dwave.svg';
import Google from '../../assets/images/google.svg';
import Amazon from '../../assets/images/amazon.svg';
import Facebook from '../../assets/images/facebook.svg';
import Uber from '../../assets/images/uber.svg'
import Openai from '../../assets/images/openai.svg';
import Saucelabs from '../../assets/images/sauce-labs.svg';
import Intel from '../../assets/images/intel.svg';
import Theia from '../../assets/images/theia.svg';
import Codeinst from '../../assets/images/code-institute.svg';
import Geekaca from '../../assets/images/geeks-academy.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    brands:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1140px',
        margin: '0 auto',
        paddingTop:'4rem',
       [theme.breakpoints.up('xs')]: {
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
      },
      [theme.breakpoints.up('sm')]: {
        display:'flex',
        justifyContent: 'end',
      },
    },
    imgBrand:{
      flexBasis: 'calc(14% - 1.375rem)',
    display: 'flex',
    border: '2px solid transparent',
    justifyContent: 'center',
    margin: '.55rem',
    filter: 'grayscale(100%) contrast(0) brightness(116%)',
    },
    imgSty:{
      width: '5.9375rem',
    },
    imgtSty:{
      width: '6.12rem',
      height:'100%',
    },
    imgthSty:{
      width: '8.125rem',

    },
  }));
  export default function BrandImg() {
    const classes = useStyles();
    return(
      <div className={classes.brands}>
        <a href="https://about.gitlab.com/" className={classes.imgBrand}>
          <img  src={Gitlab}  alt="Gitlab logo" className={classes.imgSty}></img>
        </a>
        <a href="//www.freecodecamp.org/" className={classes.imgBrand}>
          <img  src={Freecode}  alt="Freecode logo"className={classes.imgtSty}></img>
        </a>
        <a href="https://www.dwavesys.com/" className={classes.imgBrand}>
          <img  src={Dwave}  alt="Dwave logo"className={classes.imgtSty}></img>
        </a>
        <a href="https://about.google.com/" className={classes.imgBrand}>
          <img  src={Google}  alt="Google logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://www.aboutamazon.com" className={classes.imgBrand}>
          <img  src={Amazon}  alt="Amazon logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://about.fb.com/" className={classes.imgBrand}>
          <img  src={Facebook}  alt="Facebook logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://about.uber.com/" className={classes.imgBrand}>
          <img  src={Uber}  alt=" uber logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://openai.com/" className={classes.imgBrand}>
          <img  src={Openai}  alt="Openai logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://saucelabs.com/" className={classes.imgBrand}>
          <img  src={Saucelabs}  alt="Saucelabs logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://intel.com/" className={classes.imgBrand}>
          <img  src={Intel}  alt="Intel logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://theia-ide.org" className={classes.imgBrand}>
          <img  src={Theia}  alt="Theia logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://codeinstitute.net/" className={classes.imgBrand}>
          <img  src={Codeinst}  alt="Codeinst logo" className={classes.imgtSty}></img>
        </a>
        <a href="https://www.4geeksacademy.co/" className={classes.imgBrand}>
          <img  src={Geekaca}  alt="Geekaca logo" className={classes.imgtSty}></img>
        </a>
            {/* <a href="https://about.gitlab.com/" >
              <img src="/svg/brands/gitlab-logo.svg" alt="GitLab">
            </a> */}
      </div>
    )}