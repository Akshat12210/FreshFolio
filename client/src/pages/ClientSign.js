import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { COUNTRIES } from './countries';
import { CountrySelector } from './selector';

   
  export default function ClientSign() {
    const myRef = React.createRef<HTMLDivElement>()
    const [isOpen, setIsOpen] = useState(false)
    const [country, setCountry] = useState('AF')
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <CountrySelector
      id={'countries'}
      ref={myRef}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={val => setCountry(val)}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
    />

          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }