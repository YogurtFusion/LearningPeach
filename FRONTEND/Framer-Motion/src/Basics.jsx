import React from "react";
import { anticipate, motion } from "motion/react";

const Bascis =()=>{
   return(  
   <>

    <div className="">
      <motion.img 
      animate={{
        x: 1000,
        rotate: 360,
      }}
      transition={{
        duration: 3,
        delay: 4,
        ease: anticipate,
        repeat: Infinity,
      }}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAABnlBMVEX9u87///91xNrb3d//vtHre7FzJ3EAAADsLTL9uMx2x93/wdT//f79tsv/+Prf3t/9y9n83d3+2+X9xtb+4en/8PT+6O7m5ub4+Pj+0t/QlqXs7Oz1tcfqqbrBwcHX19eyhZJttcl4fozxZ2zTKS+XorSz0d62trbGmqajn6DEk6HaoLFEMzhzVl5kSlI9Z3JPdoODe4nB36aOylFfmKmzkqHCJi3tOT5bhpSzIytiqbzfLDGTT3KEipjJ196Qi47Fs7iQfYPZwsigaHmql565f5GigIpubnm/o6ttg5GIZW+ZcX0oHSBUP0UbExaciJYoKi94k6I4R07x+ejS6rx6ZnSTqLFuojepzohld3DEojyHcC6trKOBsVEfGid6oFPf8M/esCmk0Xl9f2N9n5tlVS//zzqYjl9UZUFeiogWABq5mkKd0mt6iHiGxz75obHzjZfrVFmNt8L1eYG6ZG7FWWPajIzQREldO1SnRU/4srVhJFpVWG1iP2WrAw/CR0+oLjdDIzxoVXhmAExxP3aATmS5aoh4QGa7X5NSRF/1sKkmAAATUElEQVR4nLWciX/TWJKAZeVNjCTHTifxEVs+FEjkg0A8kYkjSEw6wYkJ4HbTsLMzywzszN50A4HdnplAb293D8d/vVXv6b4sB039SHB8SJ+r6tWrV+/gUkFSr5Wsx7Wi85VMfokI3IwiCIuFbOCNwoULfrpYq1mP1YqNVVjkZsZiaMtL+STAAE3NGY9KpvqyK5JwISyDbTWfSQAMeGqGqop1irUkLVyYykBbLCQAhmh1pisgzC5dzIY+tLgGjQJLpXLMvyo1MOLnYzG01Xho0WCpkkrNeFtOiAvRuKU4rjYFDMyIZPUOSQwM0JZXEgBLfQlkpWaSYGDPpalhbRpY5aR9AE2gVk2UjBOkae1zClj+qFgp5tRcqUcIoCVHB552cbBS/ctDFmVrxXqnU242ywkqbmE50pwRYPVWvV5rtWizVGuDej2Xqx9VEwMDc0YFjnCwnMrUprYqqWLL6ARKBwn6miBEtM5wsJrZV1ZaddWKPLVyoq0g3NFCwfJtBCshUWVgqAvUVrojJQm2sBoWbMPACqQMiU9pDh8XmVEr2HPWk9UYJ6zOBlaALmgICoIMo1KpDYqVUoVmaPVhogpDssXgxhkMVoBPELkHDbKuqrV6vaWq2GkW1aGcMFcoWSBYgX6CcO0j1gAqtRb8Lg0aCQYLB1mgNYPA8mYqQYQ7PZb4qNA2G0LSZowiCwDLO9ybCO0B+lYp10y4t3SRBUQNP1jWlROSRkVVi6XKyd+NCmXBH2l9YJlVF5d83CrliqXSSXKZYqD4kg0f2KpzxEGqayLfV3P1k7+jIZl4m6YXrOAaCQldXhSPO52O7OIyYgZJsDEIi5lIsLz73cDFHxOaijmE3GV/VxtJ9uirkWDLLlca6qI48qf70l32HNmUEyRbyEeALbkcrAFc/YC+UWozlUmnjSQjm5QNBXMZUir3RVEPujXp3DP+v5bo4Gk1DCzjNCSpjkRROQi8hHy1LdG3XE12WFcIAXMZUjpWRHEtxIk27zNb3k/S/TmBZALBXIYkd4BLC1EIaTygr0ib9xPkcndNNpgr5JNOX+SVcYg+pHb6lII10gkH3nwAWMH1ji7PiyPHXavORIzID+7LFD+daLuEMBsA5ryD1IZIobcdT3VcGaJ0lRIB2GayqZAdzCwwZ19Eu0hxzfmJsuvz0t30NSSqXr2XKJcjZJhg2WXn62OFd3u+3Hb5EjhZGl+Wr6XbCQ9OCh6wgrMvghAGCnMYj3Tc7ZN0HqRPl5clci2daMBweJkJ5oyt0hBChV52eI/kvb18NX317uZm41r6bqJctpcZYHlnbJUhVIh957t9YNJmmsmDzYTBTJUZYIvOGAaxFWKY5BwSecDQx0yyhG3JkbwDLOu8uDCGGKaXiezwK3e4ImDJdPqr69e/Sqev9xtBl5cvPAA1wj8DW3K5/gQsOalypGxdXPaANYBri1cUResrej+wYV68eydZCywjuXojXeT5LuJYuZgHTL6fTn8t6mpN1fXWl63AIHvxGsdCwQJzub40Bhfjx5wdJCCzbkjOwWYHFKYpON5UBw+/KQUWWi4e31iQpWCuEZvUBS7lDuukaW/ZGT66NmzbGRAB1/9aeYw5Sknd/offpG4HlA6cbWJWf8saYBm3KSgYU4I8lAm5q/3jb3/3u609K7BJp+BhoLDSN6XUPz35/R+eFjtRYFJ5RjBaaOS8UZ8T1mwwUm3IXVH89tmzZ9+KWsO802b6gT4pZba/++eUuv1k+9epgOGw5ZWkPWspRsBqHudtkxznAAOyR9ofNV77k4Z549DQwtX0V/wk9XR7+/nD2vZzBPNd3GouUnv29on1bADLLLrAiO1jCLb1L//6bzDqhecguFH7EBktqaZ+/eTfnzxVn29vP03d9mqMWDiN8uyJEXZLnCe6ovMDA28oR2r8x2+f/ZE3RNTaLAtL98HFfvPkP//w9PbDb56m/BojDepXRGpcJGxgjOW8VQFg0Y1wgX+s/enZf+HfDjJIqNMKDxrbfv78ISvP+sBkCkbk0wul3sIyBVv12KGjOZKeNeVbjXExc/Y7BBrlPegaUg+/++6bCp06rzTxrUSSzGhH5DL+YXDBC4IgzWTRLIIte8Bol2SmiZjKUi6lv9VHvFFn+W76OoBVUqVSik1n1uDNEvfi5cuXL3C6iVTb3a21tUbnlMOyR7W5N5pMRr0ZgoaQB7Cs71naibNWRaMtA+P7moYPRu1r6S1IP9CIlREtNx5wkvDy1c7OzqVLr15IQnuio371rkwkub2u0b/E0DFXENgSgOV9LeqOAvfvMrBHlnvpfcOk2tfpPtxIy6VSj5XHpVTpTKu+3rn06vWLFy9f7+y86OrU6Kh1uTGBJN34nBK/HUCvxKVWfMFR3sJEkbqH1FYMlYlbffORdk9Xxm/+e/d/DieiePb4qPfm0qWd13/9AmT19aXvefN9+sFEEa2Gw4t78Y25nOV8vo/dOF6HDmlJVTNv8+dj8x6iovzlxpVLIK9eff/9qx18dJlyffHFi1c71lfR8LOiIQgaP9RKALboA6M05nB3ZBhC//mct7794e6NKzcvOeTma8b1xctXl9YtMAVdS5uMh8Mudc9x/JaZ59zjNkOo+9PEhfQU4y7z830L7C+7TGO2XF6mXH+9vGOB8VjGWut1YBAPeZOCTT12hVkocNmgAliZqoxVAZgtxbfz8+emWQFs1wMGPgbyEriunJk67munZaNOS1DzM9hSWOGyge/t4mXohJZ8YIHNvzPd5xDAbnrIXl2+TN3te9OS1x+V7fRS6qHKYlc6hCUuH/Q8qdIRHH5BqYw9kqi8A7D5t4xMXN/1Opkt62ZUabuzXjRC7FAmrHKFYLuPwbVYPVEaUbBfgOs8pxpkhz+EkN18Y+iL77qDA+1PjmJywegyBIyVVWgyQTt1BjaGJN/o0d/84LfmpZs3r/wv8zCR9xYjhT3UdOxItsz54ysjK1shQ94TDVPWUpXxO9oCRAV05lEaYF350eBS1rxpBTZvcT12MhsKBr0kjsdxFEcg+jOwo9YH+N3HeCbywx93Ee3KTSZXrly5sXtoWFo59qU7DCy2xqRQME5GY7K+HB99mrfkJ2pO8exwF7SGdDdu7O7+8MMPh+ss0YUcXPB5+YwaI+FgEjUmTkBITeiW356fW2S/bGHPjAWON6g2xPvxcHzGMyx9dBSQHpKePovGuHAww+vRzaBFif10+vc22rsRy2VE/mwd5MzII+FH36plgoZzACaKR4mAcdwButkxwS5K1LG083+2PX/5aaRYPbQpSr/bbsOAM2DalZpyHBsrwpSYIGPtmr8rY61Yuechm5//+d3biaazvlTRda3f36xKRKr26mFg8RdHRDg/Z3YA0AAg3RC/ptWw83mPnP/yE8inLU3XeZbDEU+J2wF2OgNYSOQ3rtahfe+QnEJTo3W6e14wRqehIQNnxMwr4cwB344NthwNBhmsRnsACGUKVVn63KczM+3AmloQEo6dSPUOzpnFTq6hSwrsxB2XpWR6d0vHdnn1z397//7W3z544IxE7TTotqRzMC7L1VYdlNpXA5prMNgql5/2JWjQ4BUYIl19/ytD3n/4cOvjx1sG3ycW7oOzLfmglKod3a2XHvdHakCRI1gWlgITRZdIDWYonZ/8ypZD+puinbN+XRwFOQVp08XtxVqlBKK2Y4JhohiUWruv3TBrBI9MhRk/8BvIfjLS2m7QV5SP2KroUg2lWO/Fm0aH1DrjH4z4yYz0Wr9lgNlkt+bnR8aLvUCw2+bkECgMh8gn8YJ/Pmj45idrG2SaQfPRtun5vBblYlUKZq4qRL5eHC4Cw7elOEOXjsby0j4ifZi/ZYPdOqeNA8ECPzlEPan2hopULk7ZGAe80YHMEHnLyJj779Hjz22wj/PQOSu0IBD0QdLBGoe5EBOtmbk93ZjCItYuYnDR6SVjjIEt0QWmicpWXwwBAzeATn2Ai9AAqoL/fxkDDGsXmTjdhDwyx7qi8hbIbLD382/1Ph8Oxkl3Dlp0WWgN/pVigq1gfWx6s3SCgT9pn5wa+/kTxHRI2MJGsxAwclhFq9RSNVwkGpQT+cCwPuZebhEGtsbbAtpxaIwOAYBNCclpZDXFVhPWWoNKpVIMSm+9ImUQzFcgC5I93kmm22CnyKWEBlgKhlIftjvV5slJM0aExTlLzjsdPiuYVc8I7pJAGjkM/A3faq9wwZWBnHfxX4iMeZdY3blVCuVD17XIvVarN1tVndX5A2qK08DErsHlejow7aFo8mxbFBbZzIh3BiIYTHGBKZTs454iOp6cJLQ2is7xct4Z8WAx63eOmHF6aFaBTVG6CU2PF0ywlakBg7TdYEZt1fOUPgw3GYlvUCljgmWna6zsBQsSUX8khzQ90hm2WgexMms2W88m66e2S1LWxelgYOH+sCNIkr9yQftytR4nsxDsyXrPEq0gMKy7xRJFW+uWO7Lk0dwp9kbFXIz9TcaKEAaWmRpj6bzvdNkA2d84Oxt0ex2nR8lHbKtaKsbykRXnSpWp/SXpTgfb35/LMSnO7auTYdXuo6onqRz0mJXU9GKnserUAPPNdPnePpymq30AmnNIbqM/tNQjn6RYVz51e9+CsU7RXA01zf1JW4lS2QYoa84juQ3d2skhnxjJdXFq35R1g7mXdBIiyBh2bA+ObpYbfiyQfVE/MC5H7hhguSlg1sJOaymg7WWEVJs9LMetH/Wq5nYMWvgJda4gLFQZq7M0e1WpXI8HZq1rtsDsINtZ181oqujrTXON/CgUzMFVrzvB9mlBsqnzI5lrxQKzV8LaqzrNYVzb2QPCQ61JXyDjsNhvc9VatXrOgZaDr9bA2po4JuN4Ppbxg7EiBul5nVxU1tHK8MWDVWZzqYO5emvQGtQdYPzeGht0Ntm2vnpkhHXs0nMsaca0jK3R8pCJe3A1cxrOKxuWftRWUR3UisVaywEmajrt7Pea7OSAyDgmOLZcOheB43KCceDdsQwe0inZ7jUoqoBUm1NV28dA3zr+EzVW9Un1IhXmWJ7uBMOQsRd4d3EPlDkMemnDMiT41wDUpc61TFPmNnjsO5Uu7lg4pqaci3Ix14J+10YDiLIhYErHMW/vlH1LY606gNUGYNGcA0xUtGNZXhNxnQaIGjXYJdkwsMyyEAwGabPMCUGRbM4BBlhqsTUoWgGWfqVrMsE5z8d4g0rUtm7XPgPPnpG80OCDyZQmYauRPJa0wWqDegXRnGEMnZ8abyTSOFaPyBQ922w8u2xW5JC8S1wXSNPfLjccMb8+GAxazgBrqhoXTGi0rBKV9EiZKLDMYjk4Koh6lcj+4O8EmyuCOKLrBn3HOoZn0j7Gq0cWoDybzLw7ubJSZ0/hee84A3ylypYUR4C5xOBS2EIpmllHpTy+DdC+vW95aaE8nmhsAsvJ0IaUY8sHFsq1z77PGYUhmPVElRL9Wyz92xhXBBxpdZrj4bruaAm4AkBq+PqFaC4aAFEgT6xHFF8DtssGbPykCRDB1WjV3sRCE48Im3F3S3DGY3HpxurQZu12MzwVFST/Nt4AMLvIApnZ2FpCdMIZm2/cEgRm+BcqzLiUUI2cdA7Y+x+4udhZMjBrA6LRvLzG9HtZbs7iirlmJuhMgkCwrGN1oGz0BeZ8dtfbMjdcY5CcjQWfOYhTExQCj74I3ifumC4hVUNHj6kxiPzI1zdszBlsME7at7F4se9fTBBTX6E767M2mcQcXmRguGTX2wCMsVtubn/DgWUu9JqiroWQo0LCziJwtIAmM95Z1VThyE8WILG4uNAjTMKPlVg0h03VCb2RYvYnEgyYpg/LRT0yJzT0FWLHSDB7konVM1nnwsjWIke/Btd0dQkRp5dEnamywk5dMmpjij1xQKq+tunl0mLMyy+EHNwwFSyVp2GDyGwtz8Q2DZGHWkjihu8Ulb0YswxC5IlH0cfjZGkTMDNER7Qk5LSvh3iaqExizONOO7ln2oFCeIiW0S7FiZV/EvlEUfS+4s+OcFo/zvTy1GO1ph7BlIeIJq8bqjgRcMuNIJ+so73ajYlu0PCsWgxU6+3qdO8SyJTjhOKcDZVZhYhhTC/zj283yyfruCBLVHoSC2migo0DN0/t9ZpVIcbETPSJPXHBsBvgzAE6aoUtyDprGvmZOCl3ynfKZVzQ468KB6orxmFascBSmRWp7BqkiPw6tAQ6CBC1joSrZOLOYAkL8U5GiwUGsiSvGwvg0ZMeN7F7Jg22D7PaibsyBlpS3LPk4oJB5OiMNXQmvX9kzDnSjOj4tHE7V4u39lBYWI59ZmFsMDDoklQFV1owbcbqPwruOKjFWeURX1szguFBiq7TCsp01Rg/KpUi8nmTKvapexcBS2FYsw95lMeark0GldTUNZECt7wy45mYs4Kh2hbJAuvdufLdVnHqeVH0OMwZzpy8KBhlW4b4L0BXjrXo0kkoFypXmukkzM8DQ7bCEjRTWrwPaZLgVcLyamG2o0M/HyyFZ0VRrlKPMrgFFLW4VMhmLqKrzwUrGZV7tbCytLS6ugiyDD+rq0tLK4X8rMe/JghWY3MdRXZwbAYli78+l8iQC4OV2AKUVK0S/b6LyoXBUFOlin2KbdLy/5ycYGZX1QwKAAAAAElFTkSuQmCC" />
    </div>
      <motion.div
        className="box"
        initial={{
          x:10
        }}
        animate={{
          x: 1200,
          rotate: 360,
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: 12,
          ease: anticipate,
        }}
      ></motion.div>
      <motion.div
      animate={{
        x: 1000,
        y:200,

      }}
      transition={
        {
          duration: 3,
          delay:2
        }

      }      
      className="circle"></motion.div>
    <motion.h1
    animate={{
      x: 1000,
      y: 400
    }}
    transition={{
      duration: 3,
      delay: 2,
    }}
    >
      Heyy!!..
    </motion.h1>
    </>)
}

export default Bascis