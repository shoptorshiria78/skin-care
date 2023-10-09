import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const Member = ({ member }) => {
    return (
        <Card
            shadow={false}
            className="relative grid h-[60vh] max-w-[450px] mt-24 lg:max-w-[200px] items-end justify-center  text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-[60vh] w-full rounded-none bg-[url('https://i.ibb.co/m8TtY3p/memeber-bg.jpg')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                    variant="h2"
                    
                    className="mb-6 font-medium text-base text-blue-100"
                >
                    Innovators Unite Transforming Together
                </Typography>
                <Typography variant="h5" className="mb-4 text-xs text-cyan-400">
                   <div className='font-bold text-sm'> {member.name}</div>
                    <br/>
                    {member.post}
                </Typography>
                <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 h-[30vh] border-white"
                    src={member.pic}               />
            </CardBody>
        </Card>
    );
};

Member.propTypes = {
    member: PropTypes.object.isRequired
}

export default Member;