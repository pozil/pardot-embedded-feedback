public with sharing class SendEmail {
  public static void send() {
    StaticResource sr = [
      SELECT Body
      FROM StaticResource
      WHERE Name = 'email_template'
      LIMIT 1
    ];
    String htmlBody = sr.Body.toString();

    // First, reserve email capacity for the current Apex transaction to ensure
    // that we won't exceed our daily email limits when sending email after
    // the current transaction is committed.
    Messaging.reserveSingleEmailCapacity(2);

    // Processes and actions involved in the Apex transaction occur next,
    // which conclude with sending a single email.

    // Now create a new single email message object
    // that will send out a single email to the addresses in the To, CC & BCC list.
    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

    // Strings to hold the email addresses to which you are sending the email.
    String[] toAddresses = new List<String>{ 'pozil@salesforce.com' };
    //String[] ccAddresses = new String[] {'smith@gmail.com'};

    // Assign the addresses for the To and CC lists to the mail object.
    mail.setToAddresses(toAddresses);
    //mail.setCcAddresses(ccAddresses);

    // Specify the address used when the recipients reply to the email.
    mail.setReplyTo('support@acme.com');

    // Specify the name used as the display name.
    mail.setSenderDisplayName('Survey Team');

    // Specify the subject line for your email address.
    mail.setSubject('Survey');

    // Set to True if you want to BCC yourself on the email.
    mail.setBccSender(false);

    // Optionally append the salesforce.com email signature to the email.
    // The email address of the user executing the Apex Code will be used.
    mail.setUseSignature(false);

    // Specify the text content of the email.
    mail.setPlainTextBody('Content without HTML');

    mail.setHtmlBody(htmlBody);

    // Send the email you have created.
    Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
  }
}
