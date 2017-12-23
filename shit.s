.text

# Decodes a quadtree to the original matrix
#
# Arguments:
#     quadtree (qNode*)
#     matrix (void*)
#     matrix_width (int)
#
# Recall that quadtree representation uses the following format:
#     struct qNode {
#         int leaf;
#         int size;
#         int x;
#         int y;
#         int gray_value;
#         qNode *child_NW, *child_NE, *child_SE, *child_SW;
#     }

quad2matrix:

        YOUR CODE HERE #
        Assume for theoretical purposes
        this is the size
        a0 is qnode
        a1 is matrix
        move $v0 $a1 # mode = currNum
        lw $s0, 0($a0) #assume that s0 is the qNode. 
        li $t0 256
        beq $t1 $t0 returnTree
        lw $t0, 16($s0) #color
        li $t1 1 #256 set to t1
        bne $t0 $t1 fullMatrix #see if the color isn't 256
        
              sub $sp, $sp, 12 #kk you put the stack pointer 4 up
              lw $s1, 20($s0) #put the NW thing in qnode
              sw $s1, 0($sp) #qnode
                
              sw $a1, 4($sp)
              sw $a3, 8($sp)
              jal helper
                
              lw $s1, 24($s0) #put the NE thing in
              sw $s1, 0($sp)
              lw $a1, 4($sp)
              sw $a1, 4($sp)
              sw $a3, 8($sp)
              jal helper
                
              lw $s1, 28($s0) #put the SW thing in
              sw $s1, 0($sp)
              lw $a1, 4($sp)
              sw $a1, 4($sp)
              sw $a3, 8($sp)
              jal helper
                
              lw $s1, 32($s0) #put the SE thing in
              sw $s1, 0($sp)
              lw $a1, 4($sp)
              sw $a1, 4($sp)
              sw $a3, 8($sp)
              jal helper
                
              lw $a1, 4($sp)
              move $v0 $a1 # mode = currNum
              j returnTree
        fullMatrix:
                li $t0 0 #start the iterator i at 0
                lw $t1, 16($s0) #get the color of the quadtree
                sb $t1, 0($a1) #put the color in the first index of the matrix
                lw $t2 0($s2)
                mult $t2, $t2
                mfhi $t3
                loop: bne $t0 $t3 returnTree
                        sb $t1, 0($a1) #put the color into that index of the matrix
                        addi $t0, $t0, 1
                        addi $a1 $a1 1 #arr[i] ($a0) is the value 4 bytes ahead
                        j loop

        
helper:
        lw $s0 0($sp) #the qnode
        lw $a1 4($sp) #the matrix
        lw $t0 8($sp) #length
        lw $t1, 16($s1) #color
        li $t2 256 #256 set to t1
        bne $t2 $t1 partMatrix #see if the color isn't 256
                sub $sp, $sp, 12 #kk you put the stack pointer 4 up
                lw $s1, 20($s0) #put the NW thing in qnode
                sw $s1, 0($sp) #qnode
                
                sw $a1, 4($sp)
                sw $a3, 8($sp)
                jal helper
                
                lw $s1, 24($s0) #put the NE thing in
                sw $s1, 0($sp)
                lw $a1, 4($sp)
                sw $a1, 4($sp)
                sw $a3, 8($sp)
                jal helper
                
                lw $s1, 28($s0) #put the SW thing in
                sw $s1, 0($sp)
                lw $a1, 4($sp)
                sw $a1, 4($sp)
                sw $a3, 8($sp)
                jal helper
                
                lw $s1, 32($s0) #put the SE thing in
                sw $s1, 0($sp)
                lw $a1, 4($sp)
                sw $a1, 4($sp)
                sw $a3, 8($sp)
                jal helper
                
                jr $ra
        
        
        partMatrix:
                lw $t3 4($s1) #size of ur segment
                lw $t4 8($s1) #x
                lw $t5 12($s1) #y
                mult $t0 $t5 #y*length
                mfhi $t6 #load it into t6
                add $t6 $t6 $t4 #y*length + x
                add $a1 $a1 $t6 #goes to the a1 [y*length + x]
                li $t7 0 #x counter
                li $t8 0 #y counter
                outerloop: beq $t8 $t0 exitouter
                        innerloop: beq $t7 $t4 exitinner
                                sb $t1, 0($a1) #put the color into that index of the matrix
                                addi $t6, $t6, 1 #the official counter
                                addi $t7 $t7 1
                                addi $a1 $a1 1 #arr[i] ($a0) is the value 4 bytes ahead
                                j innerloop
                        exitinner:
                        li $t7 0 #now, set the x counter back to zero
                        add $a1 $a1 $t0 #goes to the next x you want to iterate from. 
                        add $t6, $t6, $t0 #the official counter
                        addi $t8 $t8 1
                        j outerloop
                exitouter:
                sub $a1 $a1 $t6
                sw $a1, 4($sp) #store the matrix back
                jr $ra #jumps back to the spot it left off
                
                        
                
                
                
        
        
