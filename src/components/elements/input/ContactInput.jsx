import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

export default function ContactInput() {
  return (
    <>
      <FormControl mb={3} isRequired>
        <FormLabel>Your Name</FormLabel>
        <Input
          autoComplete={'off'}
          rounded={'full'}
          name="client_name"
          type="text"
          placeholder="John Doe"
        />
      </FormControl>
      <FormControl mb={3} isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          autoComplete={'off'}
          rounded={'full'}
          type={'email'}
          placeholder={'example@gmail.com'}
          name={'email_name'}
        />
      </FormControl>
      <FormControl mb={3} isRequired>
        <FormLabel>Your Message</FormLabel>
        <Textarea
          autoComplete={'off'}
          rounded={'lg'}
          name={'message'}
          placeholder={'Message'}
        />
      </FormControl>
    </>
  );
}
