import numpy as np
import matplotlib 

def lerp(a0,a1,w):
    return (1.0 - w) * a0 + w * a1        

def dotGridGradient(ix, iy, x, y):
    
