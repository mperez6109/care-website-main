<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Caretail extends Theme
{

    public static function getSubscribedEvents()
    {
        return [
            'onTwigInitialized'     => ['onTwigInitialized', 0],
        ];
    }

    public function onTwigInitialized()
    {
        $this->grav['twig']->twig()->addFilter(
            new \Twig_SimpleFilter('postcaredate', [$this, 'dashesToSlashesForDates'])
        );
    }

    /**
     * Break a string up into chunks
     */
    public function dashesToSlashesForDates($dateString)
    {
        $result = preg_match('/\/\d{4}-\d{1,2}\-\d{1,2}\-/', $dateString, $dates);
        if ($result) {
            $oldDate = $dates[0];
            $newDate = str_replace('-', '/', $oldDate);
            $dateString = str_replace($oldDate, $newDate, $dateString);
        }

        return $dateString;
    }
}
