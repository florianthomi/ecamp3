<?php

namespace App\Tests\Service;

use App\Entity\Camp;
use App\Entity\User;
use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class MailServiceTest extends KernelTestCase {
    public const INVITE_MAIL = 'invite@mail.com';
    public const INVITE_KEY = 'key';

    private Camp $camp;
    private User $user;

    private MailService $mailer;

    protected function setUp(): void {
        static::bootKernel();
        /** @var MailService $mailer */
        $mailer = self::getContainer()->get(MailService::class);
        $this->mailer = $mailer;

        $this->user = new User();
        $this->user->nickname = 'coolScoutName';

        $this->camp = new Camp();
        $this->camp->name = 'some camp';
    }

    public function testSendInviteToCampMail() {
        $this->mailer->sendInviteToCampMail($this->user, $this->camp, self::INVITE_KEY, self::INVITE_MAIL);

        self::assertEmailCount(1);
        $mailerMessage = self::getMailerMessage(0);
        self::assertEmailAddressContains($mailerMessage, 'To', self::INVITE_MAIL);

        self::assertEmailHtmlBodyContains($mailerMessage, $this->camp->name);
        self::assertEmailHtmlBodyContains($mailerMessage, $this->user->getDisplayName());
        self::assertEmailHtmlBodyContains($mailerMessage, self::INVITE_KEY);

        self::assertEmailTextBodyContains($mailerMessage, $this->camp->name);
        self::assertEmailTextBodyContains($mailerMessage, $this->user->getDisplayName());
        self::assertEmailTextBodyContains($mailerMessage, self::INVITE_KEY);
    }
}
