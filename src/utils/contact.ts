import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'Owoyele Adedayo',
	password: 'Olasunkanmi$25',
	host: 'smtp.owoyeleadedayo252gmail.com',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent


export const sendEmail = (email:string) => {
    client.send(
	{
		text: 'i hope this works',
		from: 'owoyeleadedayo25@gmail.com',
		to: email,
		cc: 'else <else@your-email.com>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);
}

