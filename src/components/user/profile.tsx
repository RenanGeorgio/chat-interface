import { useState } from 'react';
import {
  FormLabel,
  Grid,
  MenuItem,
  Select,
  Button,
  Typography,
  Box,
  Switch
} from '@mui/material';

interface SettingsProps {
  defaultAutoUpdate: boolean;
  defaultReportFrequency: string;
}

const user = {
  name: "Jackson",
  email: "testando@example.com"
}

export default function ProfilePage (defaultAutoUpdate, defaultReportFrequency : SettingsProps) {
  const [autoUpdate, setAutoUpdate] = useState(defaultAutoUpdate);
  const [reportFrequency, setReportFrequency] = useState(defaultReportFrequency);
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState('');
  const [monthly, setMonthly] = useState('');

  const handleAutoUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoUpdate(event.target.checked);
  };

  const handleReportFrequencyChange = (event: any) => {
    setReportFrequency(event.target.value);
  };

  const handleSave = () => {
    console.log(`Auto update: ${autoUpdate}, Report frequency: ${reportFrequency}`);
  };

  const handleReportSubmit = () => {
    const emailBody = `Olá,

    Segue em anexo o relatório solicitado.

    Atenciosamente,
    ${user.name}`;
    const emailSubject = 'Relatório solicitado';
    const emailRecipient = user.email;
    const attachmentPath = '/path/to/report.pdf';

    // sendEmail(emailRecipient, emailSubject, emailBody, attachmentPath)
    //   .then(() => {
    //     console.log('Relatório enviado por e-mail com sucesso!');
    //   })
    //   .catch((error) => {
    //     console.error('Erro ao enviar relatório por e-mail:', error);
    //   });
  };

  // const sendEmail = (recipient: string, subject: string, body: string, attachmentPath?: string) => {
  //   return new Promise<void>((resolve, reject) => {
  //     const emailData = {
  //       to: recipient,
  //       subject: subject,
  //       body: body,
  //       attachments: attachmentPath ? [attachmentPath] : null
  //     };
  //     window.Email.send({
  //       ...emailData,
  //       SecureToken: 'seu_token_aqui',
  //       From: 'seu_email_aqui',
  //       Host: 'smtp.host.com',
  //       Username: 'seu_username_aqui',
  //       Password: 'sua_senha_aqui',
  //       SMTPPort: 465,
  //       To: recipient,
  //       ...emailData
  //     }).then(() => {
  //       resolve();
  //     }).catch((error: any) => {
  //       reject(error);
  //     });
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("1:", daily);
    console.log("2:", weekly);
    console.log("3:", monthly);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box p={4} sx={{ height: 'calc(100vh - 64px)', backgroundColor: '#292929' }}>
      <Box
        sx={{
          backgroundColor: '#666666',
          mx: 0.5,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Configurações
        </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6} md={6}>
              <FormLabel component="legend">Detalhes</FormLabel>
              <Typography>Automatic updates</Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Switch {...label} defaultChecked checked={autoUpdate} onChange={handleAutoUpdateChange} sx={{ height: '50' }} />
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography>
                Report frequency
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Select onChange={handleReportFrequencyChange} value={reportFrequency} >
                <MenuItem value="daily">Daily</MenuItem >
                <MenuItem value="weekly">Weekly</MenuItem >
                <MenuItem value="monthly">Monthly</MenuItem >
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
            </Grid>
          </Grid>
      </Box>
    </Box>
  );
}
