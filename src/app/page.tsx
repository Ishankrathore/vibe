"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useTRPC } from '@/trpc/client'; 
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
const page =  () => {
  const [value,setValue]=useState('');
  const trpc = useTRPC();
  const invoke=useMutation(trpc.invoke.mutationOptions({
    onSuccess: ()=> {
      toast.success('Inngest function invoked successfully');
    }
  }));
  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <Input value={value} onChange={(e)=>setValue(e.target.value)} />
      <Button disabled={invoke.isPending} onClick={()=>{
        invoke.mutate({value:value})
      }}>Invoke Inngest Function

      </Button>
    </div>
  );
}
export default page;