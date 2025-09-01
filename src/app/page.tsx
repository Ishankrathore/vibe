"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import { useTRPC } from '@/trpc/client'; 
import { useMutation } from '@tanstack/react-query';
const page =  () => {
  const trpc = useTRPC();
  const invoke=useMutation(trpc.invoke.mutationOptions({}));
  return (
    <div>

      <Button onClick={()=>{
        invoke.mutate({text:'test'})
      }}>Invoke Inngest Function

      </Button>
    </div>
  );
}
export default page;